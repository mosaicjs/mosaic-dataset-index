import expect from 'expect.js';
import { AdapterManager } from 'mosaic-adapters';
import { QueryVisitor, SerializeQueryListener } from '../lib/query';

describe('SerializeQueryListener', function() {
    let adapters = new AdapterManager();
    const visitor = new QueryVisitor({ adapters });
    function test(test, control) {
        control = control || test;
        const listener = new SerializeQueryListener();
        visitor.visit(test, listener);
        expect(listener.query).to.eql(control);
    }
    it('should generate empty objects for queries without conditions', function(){
        test({});
        test({$and:{}}, {});
        test({$and:{$or:{},$not:{$and:{$or:{},$not:{}}}}}, {});
        test({$and:{x:'toto'}}, {$and:{x:['toto']}});
        test({$and:{x:'toto', y: 'tata'}}, {$and:{x:['toto'],y:['tata']}});
        test({$and:{x:['toto']}}, {$and:{x:['toto']}});
    });
    it('should be able to re-generate complex queries', function(){
        test({
            $or : {
                ecosystem : [ 'digital', 'science' ],
                country : 'usa'
            },
            tags : 'design'
        },{
            $or : {
                ecosystem : [ 'digital', 'science' ],
                country : [ 'usa' ]
            },
            tags : [ 'design' ]
        });
    });
});
