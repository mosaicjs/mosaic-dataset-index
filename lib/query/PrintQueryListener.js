import QueryListener from './QueryListener';

export default class PrintQueryListener extends QueryListener {
    constructor(options){
        super(options);
        this.depth = 0;
    }
    onValue(field, values) {
        this._print('<' + field + '>' + values.join(', ') + '</'
                + field + '>');
    }
    beginOperation(op) {
        this._print('<' + op + '>');
        this.depth++;
    }
    endOperation(op) {
        this.depth--;
        this._print('</' + op + '>');
    }
    _print(msg) {
        let shift = '';
        for (let i = 0; i < this.depth; i++) {
            shift += '  ';
        }
        console.log(shift + msg);
    }
}