export default class QueryListener {
    constructor(options){ this.options = options || {}; }
    onValue(field, values) {}
    beginOperation(op) {}
    endOperation(op) {}
}