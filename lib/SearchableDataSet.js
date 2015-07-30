import Promise from 'promise';
import DataSetIndex from './DataSetIndex';
import { DataSet } from 'mosaic-dataset';

export default class SearchableDataSet extends DataSet {
    
    constructor(...params){
        super(...params);
        this.indexes = {};
        let dataSet = this.options.dataSet;
        this._onIndexing = this._onIndexing.bind(this);
        let indexFields = this.options.indexFields;
        for (let key in indexFields){
            let fields = indexFields[key];
            let index = new DataSetIndex({dataSet, fields});
            index.addListener('indexing', this._onIndexing);
            index.indexKey = key;
            this.indexes[key] = index; 
        }
    }
    
    close(){
        for (let key in this._indexes){
            let index = this._indexes[key];
            index.removeListener('indexing', this._onIndexing);
        }
        this._indexes = {};
        return super.close();
    }
    
    search(queries){
        let that = this;
        return this.action('search', function(intent) {
            let indexes = []; 
            let promises = [];
            for (let type in that.indexes) {
                let query = queries[type] || '';
                if (Array.isArray(query)){
                    query = query.join(' ');
                }
                let index = that.indexes[type];
                if (index) {
                    indexes.push(index);
                    promises.push(index.search(query).promise);
                }
            }
            return Promise.all(promises).then(function(){
                return DataSet.intersection(...indexes);
            }).then(function(items){
                return that.setItems(items);
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