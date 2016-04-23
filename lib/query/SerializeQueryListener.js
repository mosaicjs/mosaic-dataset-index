import QueryListener from './QueryListener';

export default class SerializeListener extends QueryListener {
    constructor(options){
        super(options || { normalize : true });
        this.options.normalize = !!this.options.normalize;
        this.query = {};
        this.stack = [{}];
    }
    onValue(field, values) {
        const top = this.stack[this.stack.length - 1];
        top[field] = this._normalize(values);
    }
    beginOperation(op) {
        this.stack.push({});
    }
    endOperation(op) {
        const obj = this.stack.pop();
        const keys = this._normalize(Object.keys(obj));
        if (keys.length) {
            const node = {};
            keys.forEach(function(key){
                node[key] = obj[key];
            });
            this.query = node;
            if (this.stack.length){
                const peek = this.stack[this.stack.length - 1];
                peek[op] = node;
            }
        }
    }
    _normalize(list){
        if (!list) return [];
        if (this.options.normalize) {
            list = list.sort(function(a, b){
                a = '' + a;
                b = '' + b;
                return a > b ? 1 : a < b ? -1 : 0; 
            });
        }
        return list;
    }
}
