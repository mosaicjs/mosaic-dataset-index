import expect from 'expect.js';
import { AdapterManager } from 'mosaic-adapters';
import { DataSet, Data } from 'mosaic-dataset';
import { SearchableDataSet } from '..';
import Promise from 'promise';
import data from './data.json'; 

describe('SearchableDataSet', function() {
    
    let adapters = new AdapterManager();
    
    it('should be able to index and search data items', function(done){
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
        expect(started).to.be(false);
        expect(finished).to.be(false);
        expect(progressCounter).to.eql(0);
        dataSet.setItems(data.features).then(function(){
            expect(started).to.be(true);
            expect(progressCounter).to.eql(20);
            expect(finished).to.be(true);
        }).then(function(){
            return index.search({ full: 'Notre-Dame' }).then(function(resultSet){
                 expect(started)
                 expect(resultSet.length).to.be(1);
                 var res = resultSet.get(0); 
                 expect(!!res).to.be(true);
                 expect(res.id).to.be('crypte-archeologique-du-parvis-notre-dame');
             });
        })//
        .then(done, done);
    });
});
