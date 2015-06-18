import { DerivativeDataSet } from 'mosaic-dataset';
import Lunr from 'lunr';
import Promise from 'promise';

Lunr.utils.warn = function(msg) {
    // Silently ignore messages
};
// Change the default tokenizer
Lunr.tokenizer = function(obj) {
    let result = [];
    if (!arguments.length || obj == null || obj == undefined)
        return result;
    if (Array.isArray(obj))
        return result = obj.map(function(t) {
            return t.toLowerCase();
        });
    return result = obj.toString().trim().toLowerCase().split(
            /[\(\)\s\-\.\/\/\'\’\"]+/);
}

/**
 * This adapters treats all data set resources as GeoJson objects and provides
 * some utility methods.
 */
export default class DataSetIndex extends DerivativeDataSet {

    constructor(...args){
        super(...args);
    }
    
    // ----------------------------------------------------------------------

    get query() { return this._query || {}; }
    set query(query) { return this.search(query); }
    search(query) { return this.updateSearchParams({ query  }); }
    
    // ----------------------------------------------------------------------

    get resourceFilter() { return this._resourceFilter; }
    set resourceFilter(filter) { return this.setResourceFilter(filter); }
    setResourceFilter(filter) { return this.updateSearchParams({ filter }); }

    // ----------------------------------------------------------------------

    /**
     * Returns all fields to index with their respective type and boost factors.
     */
    get indexFields() {
       this._fields = this._fields || this.options.fields;
       if (!this._fields) {
           this._fields = {
               "properties.name" : {
                   "boost" : 10
               },
               "properties.description" : {
                   "boost" : 5
               },
               "properties.tags" : {
                   "boost" : 15,
                   "filter" : true
               },
               "properties.address" : {
                   "boost" : 1
               },
               "properties.postcode" : {
                   "boost" : 1,
                   "filter" : "prefix"
               },
               "properties.city" : {
                   "boost" : 2
               },
               "properties.url" : {
                   "boost" : 0.5
               }
           }
       }
       return this._fields;
    }
    set indexFields(fields) { return this.setIndexFields(fields); }
    setIndexFields(fields) { return this.updateSearchParams({fields}); }

    /**
     * Updates parameters influencing search results.
     */
    updateSearchParams(params, force) {
        let that = this;
        function setParam(field, key){
            let updated = force;
            if (key in params) {
                let value = params[key] || '';
                let prevValue = that[field];
                updated |= (prevValue !== value); 
                that[field] = value;
            }
            return updated;
        }
        return this.action('params', function(intent) {
            let updated = setParam('_query', 'query');
            updated |= setParam('_resourceFilter', 'filter');
            updated |= setParam('_fields', 'fields');
            if (updated){
                return this._runSearch().then(function(){
                    return true;
                });
            } else {
                return false;
            }
        });
    }
    
    // ----------------------------------------------------------------------
    
    /** Updates the list */
    _onMainDataSetUpdate(intent) {
        var that = this;
        return intent.after(function(){
            return that._runSearch();
        });
    }

    _runSearch() {
        let that = this;
        return this.action('search', function(intent) {
            return that._getLunrIndex().then(function(index){
                let entries = that._scores = index.lunr.search(that._query);
                let dataSet = that.dataSet;
                let list = [];
                entries.forEach(function(entry) {
                    let r = dataSet.byId(entry.ref);
                    if (!r) return ;
                    list.push(r);
                });
                list = that._filterSearchResult(list);
                return that.setResources(list);
            })
        });
    }

    /** Builds and returns a full-text search index. */
    _getLunrIndex() {
        if (this.parentVersion !== this.dataSet.version) {
            delete this._indexPromise;
        }
        if (!this._indexPromise) {
            this.parentVersion = this.dataSet.version;
            let that = this;
            that._indexPromise = new Promise(function(resolve, reject){
                try {
                    let index = {};
                    Lunr(function(lunr) {
                        index.lunr = lunr;
                        lunr.ref('_id', {
                            boost : 1
                        });
                        let fields = that.indexFields;
                        for (let field in fields){
                            let info = fields[field];
                            info = info || {};
                            let boost = info.boost || 1;
                            let type = info.type || 'field';
                            lunr[type](field, {
                                boost : boost
                            });
                        }
                    });
                    resolve(index);
                } catch (err) {
                    delete that._indexPromise;
                    reject(err);
                }
            }).then(function(index){
                let resources = that.dataSet.resources;
                return that._reindexResources(index, resources).then(function(){
                    return index;
                });
            });
        }
        return this._indexPromise;
    }

    _setIndexingPipeline(index) {
        index.lunr.pipeline.reset();
        index.lunr.pipeline.add(this._filterToken.bind(this, [ //
            // DataSetIndex.numberFilters, //
            DataSetIndex.normalizeText, //
            Lunr.stemmer, //
            // Lunr.trimmer, //
            // Lunr.stopWordFilter, //
            DataSetIndex.emptyStopWordFilter //
        ]));
    }
    
    _setSearchPipeline(index) {
        // Disable token registration
        index.lunr.pipeline.reset();
        index.lunr.pipeline.add(this._filterToken.bind(this, [ //
            DataSetIndex.normalizeText, //
            Lunr.stemmer, //
            DataSetIndex.emptyStopWordFilter //
        ]));
    }
    
    _filterToken(filters, token) {
        for (let i = 0; i < filters.length; i++) {
            token = filters[i](token);
            if (!token)
                return;
        }
        return token;
    }

    _reindexResources(index, resources) {
        let that = this;
        return that.action('indexing', function(intent){
            that._setIndexingPipeline(index);
            let fields = that.indexFields;
            let event = {
                resources : resources,
                len : resources.length,
                pos : 0
            };
            resources.forEach(function(resource, key) {
                let indexEntry = {
                    _id : resource.id 
                };
                for (let field in fields) {
                    let fieldInfo = fields[field];
                    let value = resource.get(field);
                    indexEntry[field] = that._mergeValues(value, ' ');
                }
                index.lunr.add(indexEntry);
                event.pos++;
                intent.emit('progress', event);
            });
            that._setSearchPipeline(index);
            return true;
        });
    }

    _filterSearchResult(resources) {
        let filter = this.resourceFilter;
        if (filter) {
            resources = filter.apply(this, resources);
        }
        return resources;
    }

    _mergeValues(val, separator) {
        let s;
        if (Array.isArray(val)) {
            s = val.map(this._filterText, this).join(separator);
        } else {
            s = this._filterText(val);
        }
        return s;
    }
    
    _filterText(val) {
        return val ? '' + val : '';
    }

    // ---------------------------------------------------------------------
    // Token filters
    
    /** Filtering of empty words */
    static emptyStopWordFilter(token){
        let filter = DataSetIndex.emptyStopWordFilter;
        if (!filter.stopWords){
            filter.stopWords = new Lunr.SortedSet();
            filter.stopWords.length = 1;
            filter.stopWords.elements = [ "" ];
        }
        if (filter.stopWords.indexOf(token) === -1)
            return token;
        return token;
    }
    
     // Filter numbers
     static numberFilters(token) {
         if (!token.match(/^\d+$/gim))
             return token;
     }
     
     static normalizeText(token){
         let filter = DataSetIndex.normalizeText;
         if (!filter.normalizer) {
             /** Normalizes texts - remove all accented characters */
             filter.normalizer = DataSetIndex.getNormalizationFunction({
                 '[ùûü]' : 'u',
                 '[ÿ]' : 'y',
                 '[àâ]' : 'a',
                 '[æ]' : 'ae',
                 '[ç]' : 'c',
                 '[éèêë]' : 'e',
                 '[ïî]' : 'i',
                 '[ô]' : 'o',
                 '[œ]' : 'oe',
             }); 
         }
         return filter.normalizer(token);
     }

     // ---------------------------------------------------------------------
     
     /** Returns a function normalizing strings */
     static getNormalizationFunction() {
         let repl = [];
         for (let i = 0; i < arguments.length; i++) {
             let mapping = arguments[i];
             for ( let key in mapping) {
                 repl.push({
                     regexp : new RegExp(key, 'gim'),
                     value : mapping[key]
                 });
             }
         }
         return function(str) {
             if (!str || str == '')
                 return '';
             str = str + '';
             for (let i = 0; i < repl.length; i++) {
                 let slot = repl[i];
                 str = str.replace(slot.regexp, slot.value);
             }
             return str;
         }
     }
     
}

