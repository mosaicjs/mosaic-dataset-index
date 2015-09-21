import Promise from 'promise';
import { DataSet } from 'mosaic-dataset';
import DataSetIndex from './DataSetIndex';
import SearchCriteria from './SearchCriteria';
import SearchCriteriaDataSet from './SearchCriteriaDataSet';

export default class SearchableDataSet extends DataSet {
    
    constructor(...params){
        super(...params);
        this._onIndexing = this._onIndexing.bind(this);
        this.indexFields = this.options.indexFields;
    }

    close(){
        this.indexFields = {};
        return super.close();
    }

    search(queries){
        let that = this;
        return this.action('search', function(intent) {
            return that._getSearchCriteria(queries).then(function(criteria){
                return criteria.runQuery(that._indexes, that);
            });
        });
    }

    get indexFields(){
        let result = {};
        for (let key in this._indexes){
            let index = this._indexes[key];
            result[key] = index.indexFields;
        }
        return result;
    }
    set indexFields(fields) { this.setIndexFields(fields) ;}
    setIndexFields(indexFields) {
        if (this._indexes) {
            for (let key in this._indexes){
                let index = this._indexes[key];
                index.removeListener('indexing', this._onIndexing);
            }
        }
        this._indexes = {};
        if (indexFields) {
            let dataSet = this.dataSet;
            for (let key in indexFields){
                let fields = indexFields[key];
                let index = new DataSetIndex({dataSet, fields});
                index.addListener('indexing', this._onIndexing);
                index.indexKey = key;
                this._indexes[key] = index;
            }
        }
    }
    
    _getSearchCriteria(queries) {
        const that = this;
        return Promise.resolve().then(function(){
            if (typeof queries.runQuery === 'function')
                return queries;
            const adapters = that.adapters;
            const criteria = new SearchCriteriaDataSet({adapters});
            queries = queries || {};
            const items = [];
            for (let key in queries){
                let values = queries[key];
                if (values && !Array.isArray(values)) {
                    values = [ values ];
                }
                items.push({ key, values });
            }
            return criteria.setItems(items).then(function(){
                return criteria;
            });
        });
    }

    _createSingletonIntent(key, params, method){
        const that = this;
        let internalIntent = that.intent(key, params);
        let counter = 0;
        function finalize(){
            counter--;
            if (counter == 0) {
                internalIntent.resolve();
            }
        }
        internalIntent.handle = function(intent){
            counter++;
            intent.then(finalize, finalize);
            return method(intent);
        }
        return internalIntent;
    }
    
    _onIndexing(intent){
        const that = this;
        if (!that._indexingIntent){
            that._indexingIntent = that._createSingletonIntent('indexing', {},
                    function(intent){
                intent.addListener('progress', function(event){
                    event.indexKey = event.index.indexKey;
                    that._indexingIntent.emit('progress', event);
                })
            });
            function finalize(){ delete that._indexingIntent; }
            that._indexingIntent.then(finalize, finalize);
        }
        that._indexingIntent.handle(intent);
    }
}