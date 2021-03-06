import { Data } from 'mosaic-dataset';
import { TypeKey } from 'mosaic-adapters';

/**
 * Instances of this type are used as containers for search criteria.
 */
export default class SearchCriteria extends Data {
    constructor(options,...params){
        super(options, ...params);
    }
    
    /**
     * Returns values of search criteria.
     */
    get values() {
        let values = this.get('values') || [];
        if (values && !Array.isArray(values)) {
            values = [values];
        }
        return values; 
    }

    /**
     * Sets a new value set for search criteria.
     */
    set values(values){
        if (values && !Array.isArray(values)) {
            values = [values];
        }
        this.set('values', values);
    }
    
    /**
     * Returns the key of this search criteria. This key is used to select the
     * index where this search criteria should be applied. (see the
     * SearchableDataSet class)
     */
    get indexKey(){ return this.get('key') || 'full'; }
    
    /**
     * Returns a human-readable label for this search criteria.
     */
    get label(){ return this.get('label') || this.values.join('; '); }

    /**
     * Adds the specified search values.
     */
    addValues(values) {
        const index = {};
        this.values.forEach(function(val){
            index[val] = true;
        });
        if (values){
            values.forEach(function(val){
                index[val] = true;
            });
        }
        values = Object.keys(index);
        this.values = values;
        return values;
    }

    /**
     * Toggles the specified search values (adds values if they does not exist
     * and removes them if they already exist).
     */
    toggleValues(values) {
        let index = {};
        this.values.forEach(function(val){
            index[val] = true;
        });
        if (values){
            values.forEach(function(val){
                if (index[val]) {
                    delete index[val];
                } else {
                    index[val] = true;
                }
            });
        } else {
            index = {};
        }
        values = Object.keys(index);
        this.values = values;
        return values;
    }
    
    /**
     * Runs this query against an index from the given object corresponding to
     * the key of this query
     */  
    runQuery(indexes, resultSet){
        const that = this;
        return Promise.resolve().then(function(){
            const index = indexes[that.indexKey];
            if (index) {
                const query = that.values.join(' ');
                return index.search(query, resultSet);
            }
        })
    }

}