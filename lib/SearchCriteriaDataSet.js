import Promise from 'promise';
import { DataSet } from 'mosaic-dataset';
import SearchCriteria from './SearchCriteria';

/**
 * Container for search criteria.
 */
export default class SearchCriteriaDataSet extends DataSet {
    constructor(options, ...params){
        options = options || {};
        if (!options.DataType) {
            options.DataType = SearchCriteria;
        }
        super(options, ...params);
    }
    
    /**
     * Returns a search criteria to apply to the SearchableDataSet index set.
     */
    get query(){ return this.getQuery(); }
    getQuery(){ return SearchCriteriaDataSet.getQuery(this); }
    
    static getQuery(set){
        let result = {};
        const defaultIndexKey = this.defaultIndexKey;
        set.forEach(function(item){
            let key = item.indexKey || defaultIndexKey;
            let values = item.values;
            if (!key || !values)
                return ;
            let array = result[key] = result[key] || [];
            values.forEach(function(val){
                array.push(val);
            });
        });
        return result;
    }

    /**
     * Returns the name of the default index.
     */
    get defaultIndexKey(){
        return this.options.defaultIndexKey || 'full';
    }
    
    /**
     * Runs this query against an index from the given object corresponding to
     * the key of this query
     */  
    runQuery(indexes,results) {
        const that = this;
        if (!that.length) {
            const defaultIndexKey = this.defaultIndexKey;
            const index = indexes[defaultIndexKey];
            return index ? index.search(null, results) : undefined;
        }
        return that._runQueries(indexes, results)
        .then(function(resultSets){
            return that._combineSearchResults(resultSets, indexes);
        }).then(function(items){
            return results.setItems(items).then(function(){
                return results;
            }); 
        });
    }
    
    _runQueries(indexes, results) {
        return Promise.all(this.map(function(item){
            const resultSet = new DataSet(results);
            return item.runQuery(indexes, resultSet);
        }));
    }
    
    _combineSearchResults(resultSets, indexes){
        resultSets = resultSets.filter(function(set){
            return !!set;
        });
        return DataSet.intersection(...resultSets);
    }
}
