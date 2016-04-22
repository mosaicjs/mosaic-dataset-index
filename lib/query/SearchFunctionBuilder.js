import { DataSet } from 'mosaic-dataset';
import QueryListener from './QueryListener';

export default class SearchFunctionBuilder extends QueryListener {
    
    constructor(options){
        super(options);
        this.stack = [[]];
    }
    
    get query(){
        const op = this.options.operation || '$and';
        const list = this.stack[this.stack.length - 1];
        return this._getQuery(op, list);
    } 
    
    onValue(field, values) {
        const that = this;
        const list = that.stack[that.stack.length - 1];
        list.push({
            runQuery(indexes) {
                return Promise.resolve().then(function(){
                    const q = values.join(' ');
                    const index = indexes[field];
                    const r = that._newDataSet();
                    return index ? index.search(q, r) : undefined;                    
                });
            }
        });
    }
    
    beginOperation(op) {
        this.stack.push([]);
    }
    
    endOperation(op) {
        const list = this.stack.pop();
        const top = this.stack[this.stack.length - 1];
        const q = this._getQuery(op, list);
        if (q) {
            top.push(q);
        }
    }
    
    _getQuery(op, list){
        if (list.length) {
            if (op === '$and') {
                return this._getAndQuery(list);
            } else if (op === '$or') {
                return this._getOrQuery(list);
            } else if (op === '$not') {
                return this._getNotQuery(list);
            }
        }
    }

    _getAndQuery(list){
        const that = this;
        return {
            runQuery(indexes) {
                return Promise.resolve().then(function(){
                    return Promise.all(list.map(function(q){
                        return q.runQuery(indexes);
                    })).then(function(dataSets){
                        dataSets = dataSets.sort(function(a, b){
                            return a.length > b.length ? 1 : -1;
                        });
                        const items = [];
                        const first = dataSets.shift();
                        first.forEach(function(item){
                            let contained = true;
                            for (let i = 0; contained && i < dataSets.length; i++) {
                                const set = dataSets[i];
                                contained = set.has(item);
                            }
                            if (contained){
                                items.push(item);
                            }
                        });
                        return that._newDataSet(items);
                    });
                });
            }
        };        
    }
    
    _getOrQuery(list){
        const that = this;
        return {
            runQuery(indexes) {
                return Promise.resolve().then(function(){
                    return Promise.all(list.map(function(q){
                        return q.runQuery(indexes);
                    })).then(function(resultSets){
                        const items = [];
                        const index = {};
                        for (let i=0; i<resultSets.length; i++) {
                            resultSets[i].forEach(function(item){
                                const id = item.id;
                                if (!(id in index)){
                                    index[id] = item;
                                    items.push(item);
                                }
                            })
                        }
                        return that._newDataSet(items);
                    });
                });
            }
        };
    }
    
    _getNotQuery(list){
        const that = this;
        return {
            runQuery(indexes) {
                return Promise.resolve().then(function(){
                    return Promise.all(list.map(function(q){
                        return q.runQuery(indexes);
                    })).then(function(resultSets){
                        const items = [];
                        const parentSet = results.dataSet;
                        if (parentSet) {
                            parentSet.forEach(function(item){
                                let contained = false;
                                for (let i = 0; !contained && i < resultSets.length; i++) {
                                    contained = resultSets[i].has(item);
                                }
                                if (!contained){
                                    items.push(item);
                                }
                            });
                        }
                        return that._newDataSet(items);
                    });
                });
            }
        };
    }
    
    _newDataSet(items){
        items = items || [];
        const set = new DataSet({...this.options, items });
        return set;
    }
}