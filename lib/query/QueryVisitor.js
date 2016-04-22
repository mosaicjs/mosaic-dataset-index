export default class QueryVisitor {
    constructor(options){
        this.options = options || {};
        this.options.operation = this.options.operation|| '$and';
    }
    visit(query, listener) {
        return visit(this.options.operation, query, listener);
        
        function visit(op, query, listener) {
            listener.beginOperation(op);
            for ( var key in query) {
                var value = query[key];
                if (key[0] === '$') {
                    visit(key, value, listener);
                } else {
                    var values = [];
                    if (!!value) {
                        if (!Array.isArray(value)) {
                            value = [ value ];
                        }
                        value.forEach(function(val) {
                            if (typeof val === 'object') {
                                throw new Error('Field criteria '
                                        + 'can not be objects.')
                            }
                            values.push(val);
                        });
                    }
                    listener.onValue(key, values);
                }
            }
            listener.endOperation(op);
        }        
    }
}