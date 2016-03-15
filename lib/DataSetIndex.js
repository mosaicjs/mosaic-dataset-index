import { DerivativeDataSet, DataSet } from 'mosaic-dataset';
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
    result = obj.toString().trim().toLowerCase().split(
            /[\(\)\s\-\.\/\/\'\’\"]+/);
    return result;
}

/**
 * This adapters automatically re-indexes all data object in a specified data
 * set.
 */
export default class DataSetIndex extends DerivativeDataSet {

    constructor(options, ...args){
        super(options, ...args);
        this.indexFields = this.options.fields;
    }
    
    // ----------------------------------------------------------------------
    
    initSearch(query, dataSet) {
        if (dataSet === undefined){
            dataSet = query;
            query = dataSet.query;
        }
        const that = this;
        if (!dataSet._indexUpdateListener) {
            dataSet._indexUpdateListener = function(intent){
                intent.then(function(){
                    return that.search(query, dataSet);
                });
            } 
        }
        this.addListener('indexing', dataSet._indexUpdateListener);
    }

    doneSearch(dataSet) {
        if (dataSet._indexUpdateListener) {
            this.removeListener('indexing', dataSet._indexUpdateListener);
            delete dataSet._indexUpdateListener;
        }
    }
    
    // ----------------------------------------------------------------------

    
    get dataFilter() { return this._dataFilter; }
    set dataFilter(filter) { return this.setDataFilter(filter); }
    setDataFilter(filter) {
        const that = this;
        return this.action('update', {index: that}, function(intent) {
            const updated = (filter !== that._filter); 
            that._filter = filter;
            return updated;
        });        
    }

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
    set indexFields(fields) {return this.setIndexFields(fields); }
    setIndexFields(fields) {
        const that = this;
        return that.action('update', {index: that}, function(intent) {
            const updated = (fields !== that._fields); 
            that._fields = fields;
            if (updated) { delete that._indexPromise; }
            return updated;
        });
    }
    
    // ----------------------------------------------------------------------
    
    search(query, resultSet) {
        let that = this;
        if (!resultSet) {
            resultSet = new DataSet({adapters:this.adapters});
        }
        return that._getLunrIndex().then(function(index){
            let list = [];
            let dataSet = that.dataSet;
            if (!query) {
                list = list.concat(dataSet.items);
            } else {
                let entries = index.lunr.search(query);
                entries.forEach(function(entry) {
                    let r = dataSet.byId(entry.ref);
                    if (!r) return ;
                    list.push(r);
                });
            }
            list = that._filterSearchResult(list);
            resultSet.query = query;
            return resultSet.setItems(list).then(function(){
                return resultSet;
            });
        });
    }
    
    // ----------------------------------------------------------------------

    /** Updates the list */
    _onMainDataSetUpdate(intent) {
        var that = this;
        return intent.after(function(){
            delete that._indexPromise;
            return that._getLunrIndex();
        });
    }

    /** Builds and returns a full-text search index. */
    _getLunrIndex() {
        if (this.parentVersion !== this.dataSet.version && this._reindexed) {
            delete this._indexPromise;
        }
        if (!this._indexPromise) {
            this._reindexed = false;
            this.parentVersion = this.dataSet.version;
            let that = this;
            that._indexPromise = new Promise(function(resolve, reject){
                try {
                    let index = {
                        refs : {},
                        lunr : new Lunr.Index()
                    };
                    let lunr = index.lunr;
                    lunr.ref('_id', {
                        boost : 1
                    });
                    let fields = that.indexFields;
                    for (let field in fields){
                        let info = fields[field];
                        info = info || {};
                        info.boost = info.boost || 1;
                        let type = info.type || 'field';
                        lunr[type](field, info);
                    }
                    resolve(index);
                } catch (err) {
                    delete that._indexPromise;
                    reject(err);
                }
            }).then(function(index){
                let items = that.dataSet.items;
                return that._reindexItems(index, items).then(function(){
                    that._reindexed = true;
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
            // Lunr.stemmer, //
            // Lunr.trimmer, //
            // Lunr.stopWordFilter, //
            DataSetIndex.emptyStopWordFilter //
        ]));
    }
    
    _setSearchPipeline(index) {
        index.lunr.pipeline.reset();
        index.lunr.pipeline.add(this._filterToken.bind(this, [ //
            DataSetIndex.normalizeText, //
            // Lunr.stemmer, //
            DataSetIndex.emptyStopWordFilter //
        ]));
    }
    
    _filterToken(filters, token) {
        const before = token;
        for (let i = 0; i < filters.length; i++) {
            token = filters[i](token);
            if (!token)
                return;
        }
        return token;
    }

    _reindexItems(index, items) {
        let that = this;
        return that.action('indexing', {index: this}, function(intent){
            that._setIndexingPipeline(index);
            const accessors = {};
            const fieldKeys = Object.keys(that.indexFields);
            fieldKeys.forEach(function(field){
                const fieldInfo = that.indexFields[field];
                let accessor;
                if (typeof fieldInfo.get === 'function') {
                    accessor = function(item){
                        return fieldInfo.get(item);
                    }
                } else {
                    accessor = function(item){
                        return item.get(field);
                    } 
                }  
                accessors[field] = accessor;
            });
            let event = {
                index : that,
                items : items,
                len : items.length,
                pos : 0
            };
            function indexChunk(chunk, timeout){
                return new Promise(function(resolve, reject){
                    setTimeout(function(){
                        try {
                            chunk.forEach(function(item, key) {
                                let indexEntry = {
                                    _id : item.id 
                                };
                                fieldKeys.forEach(function(field){
                                    const accessor = accessors[field];
                                    let value = accessor(item);
                                    indexEntry[field] = that._mergeValues(value, ' ');
                                });
                                index.lunr.add(indexEntry);
                                event.item = item;
                                event.pos++;
                                intent.emit('progress', event);
                            });
                            resolve();
                        } catch (err){
                            reject(err);
                        }
                    }, 10);
                });
            }
            let chunk = [];
            let blockSize = 100;
            let promises = [];
            for (let i = 0, len = items.length; i<len; i++) {
                chunk.push(items[i]);
                if (chunk.length % blockSize === 0) {
                    promises.push(indexChunk(chunk, 10));
                    chunk = [];
                }
            }
            if (chunk.length) {
                promises.push(indexChunk(chunk, 10));
            }
            return Promise.all(promises).then(function(){
                that._setSearchPipeline(index);
                return true;
            });
        });
    }

    _filterSearchResult(items) {
        let filter = this.dataFilter;
        if (filter) {
            items = filter.call(this, items);
        }
        return items;
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
            filter.stopWords.elements = [];
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
             const before = str;
             str = str + '';
             for (let i = 0; i < repl.length; i++) {
                 let slot = repl[i];
                 str = str.replace(slot.regexp, slot.value);
             }
             return str;
         }
     }
     
}

