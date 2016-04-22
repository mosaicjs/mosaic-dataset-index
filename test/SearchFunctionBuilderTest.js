import expect from 'expect.js';
import { DataSet } from 'mosaic-dataset';
import { AdapterManager } from 'mosaic-adapters';
import { QueryVisitor, SearchFunctionBuilder } from '../';

describe('SearchFunctionBuilder', function() {
    const first = { id : 1, ecosystem : 'digital', country : 'uk', tags : 'design'  };
    const second = { id : 2, ecosystem : 'ecology', country : 'usa', tags : 'design'  };
    const third = { id : 3, ecosystem : 'science', country : 'fr', tags : ['design', 'web']  };
    const fourth = { id : 4, ecosystem : 'digital', country : 'usa', tags : 'web'  };
    const fifth = { id : 5, ecosystem : ['ecology','digital'], country : 'uk', tags : 'web'  };

    let adapters = new AdapterManager();
    const visitor = new QueryVisitor({ adapters });
    const set = new DataSet({ adapters, items : [first, second, third, fourth, fifth] });
    function searchIn(field){
        return {
            search : function(values){
                const result = new DataSet();
                set.forEach(function(item){
                    let testValues = item.get(field);
                    if (!Array.isArray(testValues)) {
                        testValues = !!testValues ? [testValues] : [];
                    };
                    for (let i = 0; i < testValues.length; i++){
                        const value = testValues[i]; 
                        if (values.indexOf(value) >= 0) {
                            result.add(item);
                            break;
                        }
                    }
                });
                return result;
            }
        }
    }
    const index = {
        ecosystem : searchIn('ecosystem'),
        tags : searchIn('tags'),
        country : searchIn('country')
    };
    
    function test(test, control) {
        return Promise.resolve().then(function(){
            const listener = new SearchFunctionBuilder();
            visitor.visit(test, listener);
            if (!control){
                expect(listener.query).to.be(undefined);
            } else {
                return listener.query.runQuery(index)//
                .then(function(results){
                    expect(!!results).to.be(true);
                    expect(results.length).to.be(control.length);
                    results.forEach(function(item, i){
                        expect(item.data).to.eql(control[i]);                            
                    });
                });
            }
        })
    }
    it('no query for empty requests', function(done){
        return Promise.all([
            test({}),
            test({$and:{}}),
            test({$or:{}}),
            test({$not:{}}),
            test({$and:{$or:{},$not:{$and:{$or:{},$not:{}}}}})
       ]).then(function(){}).then(done, done);
    });
    it('simple query functions', function(done){
        return Promise.all([
            test({country: 'uk'}, [first, fifth]),
            test({country: 'fr'}, [third]),
            test({tags : 'web'}, [third, fourth, fifth]),
            test({$or: { ecosystem: 'science', country : 'usa' }}, [third, second, fourth])
       ]).then(function(){}).then(done, done);
    });    
    it('complex query functions', function(done){
        return test({
            $or : {
                ecosystem : [ 'digital', 'science' ],
                country : 'usa'
            },
            tags : 'design'
        }, [
            first,
            second,
            third
        ]).then(done, done);
    });    
});
