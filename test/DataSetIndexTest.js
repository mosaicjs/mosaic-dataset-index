import expect from 'expect.js';

import { AdapterManager } from 'mosaic-adapters';
import { DataSet, Data } from 'mosaic-dataset';
import { DataSetIndex } from '..';
import Promise from 'promise';
import data from './data.json'; 

describe('DataSetIndex', function() {
    let adapters = new AdapterManager();
    
    it('should be able to index and search data items', function(done){
        let dataSet = new DataSet({adapters});
        let index = dataSet.getAdapter(DataSetIndex);
        expect(!!index).to.be(true);
        
        let started = false;
        let finished = false;
        let progress = [];
        index.on('indexing', function(intent){
            started = true;
            intent.on('progress', function(ev){
                let percent = Math.round(100 * ev.pos / ev.len);
                if (percent % 10 === 0) {
                    progress.push(percent);
                }
            });
            intent.then(function(){
                finished = true;
            });
        });
        expect(started).to.be(false);
        expect(finished).to.be(false);
        expect(progress).to.eql([]);
        dataSet.setItems(data.features).then(function(){
            expect(started).to.be(true);
            expect(progress).to.eql([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
        }).then(function(){
            expect(finished).to.be(true);
            return index.search('Notre-Dame').then(function(){
                 expect(started)
                 expect(index.length).to.be(1);
                 var res = index.items[0]; 
                 expect(!!res).to.be(true);
                 expect(res.id).to.be('crypte-archeologique-du-parvis-notre-dame');
             });
        }).then(function(){
            function search(query){
                return index.search(query).then(function(){
                    return index.map(function(item, pos){
                        return item.data;
                    });
                })
            }
            return Promise.all([search('oeuvre'), search('œuvre')])//
            .then(function([first, second]) {
                expect(first).to.eql(second);
            })
        })//
        .then(done, done);
    });
});
