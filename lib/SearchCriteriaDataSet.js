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
        set.forEach(function(item){
            let key = item.indexKey || 'full';
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
}