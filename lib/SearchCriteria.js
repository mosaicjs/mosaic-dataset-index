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
        if (!Array.isArray(values)) {
            values = [values];
        }
        return values; 
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
}