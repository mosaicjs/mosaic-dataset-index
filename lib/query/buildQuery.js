import QueryVisitor from './QueryVisitor';
import SearchFunctionBuilder from './SearchFunctionBuilder';
import SerializeQueryListener from './SerializeQueryListener';

export default function buildQuery(q, options){
    const visitor = new QueryVisitor();
    let listener = new SerializeQueryListener();
    visitor.visit(q, listener);
    q = listener.query;
    listener = new SearchFunctionBuilder(options);
    visitor.visit(q, listener);
    const result = listener.query;
    result.query = q;
    return result;
}