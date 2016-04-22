import QueryListener from './QueryListener';

export default class SerializeListener extends QueryListener {
    constructor(options){
        super(options);
        this.query = {};
        this.stack = [{}];
    }
    onValue(field, values) {
        const top = this.stack[this.stack.length - 1];
        top[field] = values;
    }
    beginOperation(op) {
        this.stack.push({});
    }
    endOperation(op) {
        const obj = this.stack.pop();
        if (Object.keys(obj).length) {
            this.query = obj;
            if (this.stack.length){
                const peek = this.stack[this.stack.length - 1];
                peek[op] = obj;
            }
        }
    }
}
