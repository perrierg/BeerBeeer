/**
 * Created by gperrier on 16/09/2014.
 */
/*
* Created by adrinhall on  2/20/14
* Description Ridiculous tests
*/

var should  = require ('Should');
var assert = require ('assert');

describe ( 'Test Framework',function(){
    it ('should have mocha installed and running.', function (){
        assert.equal(true, true);
    })
    it ('should have mocha installed and running.', function (){
       true.should.equal(true);
    })

})
