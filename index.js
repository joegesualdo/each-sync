var async = require('async');
var request = require('request');

function eachSync(startingIndex, array, Fn, callback){
  async.series((function(){
    functionArray = []
    for(var i = startingIndex; i< array.length; i++){
      var f = function(i){
        return function(callback){
          Fn(i, callback)
        }
      }
      functionArray.push(f(i))
    }
    return functionArray;
  })(), function(error, results) {
      callback(null, "complete")
  });

}

module.exports = eachSync

