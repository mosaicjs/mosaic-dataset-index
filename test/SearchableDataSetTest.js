import expect from 'expect.js';
import { AdapterManager } from 'mosaic-adapters';
import { DataSet, Data } from 'mosaic-dataset';
import { SearchableDataSet } from '..';
import { QueryVisitor, SearchFunctionBuilder, buildQuery } from '../';
import data from './data.json'; 

describe('SearchableDataSet', function() {
    
    let adapters = new AdapterManager();
    
    describe('* indexing', function(){
        let dataSet = new DataSet({adapters});
        let index = dataSet.getAdapter(SearchableDataSet);
        expect(!!index).to.be(true);
        index.indexFields = {
             full : {
                 "properties.name" : {
                     "boost" : 10
                 },
                 "properties.description" : {
                     "boost" : 5
                 },
                 "properties.tags" : {
                     "boost" : 15,
                     "filter" : true
                 },
             },
             category : {
                 "properties.category" : {
                     "boost" : 1
                 },
             }
        };

        let started = false;
        var finished = false;
        var progressCounter = 0;
        index.on('indexing', function(intent){
            started = true;
            intent.on('progress', function(ev){
                let percent = Math.round(100 * ev.pos / ev.len);
                if (percent % 10 === 0) {
                    progressCounter++;
                }
            });
            intent.then(function(){
                finished = true;
            });
        });
        it('should notify about individual stages of the indexing process', function(done){
            expect(started).to.be(false);
            expect(finished).to.be(false);
            expect(progressCounter).to.eql(0);
            return dataSet.setItems(data.features).then(function(){
                expect(started).to.be(true);
                expect(progressCounter).to.eql(20);
                expect(finished).to.be(true);
            }).then(done, done);
        });
    });
    
    describe('* search', function(){
        let index;
        beforeEach(function(done){
            let dataSet = new DataSet({adapters});
            index = dataSet.getAdapter(SearchableDataSet);
            expect(!!index).to.be(true);
            index.indexFields = {
                    q : {
                        "properties.name" : {
                            "boost" : 10
                        },
                        "properties.description" : {
                            "boost" : 5
                        },
                        "properties.tags" : {
                            "boost" : 15,
                            "filter" : true
                        },
                    },
                    category : {
                        "properties.category" : {
                            "boost" : 1
                        },
                    }
            };
            dataSet.setItems(data.features)
            .then(function(){}).then(done, done);            
        });
        
        it('should be able to search data items', function(done){
            return index.search({ q: 'Notre-Dame' }).then(function(resultSet){
                expect(resultSet.length).to.be(1);
                var res = resultSet.get(0); 
                expect(!!res).to.be(true);
                expect(res.id).to.be('crypte-archeologique-du-parvis-notre-dame');
            })//
            .then(done, done);
        });
        function testStructuredQueries(msg, q, ids) {
            it(msg, function(done){
                var query = buildQuery(q);
                return index.search(query).then(function(resultSet){
                    expect(resultSet.length).to.be(ids.length);
                    resultSet.forEach(function(item, i){
                        var id = ids[i];
                        expect(!!item).to.be(true);
                        expect(item.id).to.be(id);
                    });
                }).then(done, done);
            });
        }
        testStructuredQueries(
            'should use simple structured queries (1)', 
            { q: 'Notre-Dame' },
            ['crypte-archeologique-du-parvis-notre-dame']
        );
        testStructuredQueries(
            'should use simple structured queries (2)', 
            { category: 'Archéologie' },
            [
                'crypte-archeologique-du-parvis-notre-dame',
                'musee-de-cluny',
                'musee-kwok-on'
            ]
         );
         testStructuredQueries(
             'should use complex structured queries', 
             { category: 'Archéologie', $not : { q : 'Notre-Dame' } },
             [
                'musee-de-cluny',
                'musee-kwok-on'
             ]
         );
         testStructuredQueries(
             'should use conditions on the same field (1)',
             { q : [ 'science' ] },
             [
                'cite-des-sciences-et-de-lindustrie',
                'bibliotheque-de-sciences-humaines-et-sociales-paris-descartes-cnrs',
                'musee-curie',
                'palais-de-la-decouverte'
             ]
         );
         testStructuredQueries(
             'should use conditions on the same field (2)',
             { q : [ 'science', 'découverte' ] },
             [
                'palais-de-la-decouverte',
                'cite-des-sciences-et-de-lindustrie'
             ]
         );
         testStructuredQueries(
             'should use conditions on the same field (3)',
             { q : 'science', $not: { q : 'découverte' } },
             [
                'bibliotheque-de-sciences-humaines-et-sociales-paris-descartes-cnrs',
                'musee-curie',
             ]
         );
         testStructuredQueries(
             'should use conditions on the same field (4)',
             { q : ['musée', 'art'], $not: { q : 'national' } },
             [
                'musee-des-arts-decoratifs-de-paris',
                'musee-des-arts-forains',
                'musee-du-louvre',
                'musee-cernuschi',
                'musee-de-la-publicite',
                'musee-de-lerotisme-paris',
                'musee-rodin',
                'musee-dapper',
                'musee-maillol',
                'musee-du-fumeur',
                'musee-kwok-on',
                'musee-marmottan-monet',
                'musee-de-la-mode-et-du-textile',
                'musee-cognacq-jay',
                'musee-du-quai-branly',
                'musee-de-la-vie-romantique',
                'musee-nissim-de-camondo',
                'petit-palais',
                'palais-de-la-decouverte',
             ]
         );
    });
});
