exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(a,b){
      return a+b;
    },0);
  },

  remove: function(arr, item) {
    while(arr.indexOf(item) !== -1){
      var index = arr.indexOf(item);
      arr.splice(index, 1);
    }
    
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    while(arr.indexOf(item) !== -1){
      var index = arr.indexOf(item);
      arr.splice(index, 1);
    }
    
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    var index = arr.length-1;
    arr.splice(index);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
   return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    var counts = 0;
    for(var i=0; i<arr.length; i++){
      if(arr[i]===item){
        counts++;
      }
    }
    return counts;
  },

  duplicates: function(arr) {
    var initialValue = {};
    var reducer =  function (tally, num){
     if(!tally[num]){
      tally[num]=1;
     } else{
      tally[num] = tally[num]+1;
     }
      return tally;
     }
    
    var obj = arr.reduce(reducer, initialValue);
    var resultArr = [];
     
    for(var prop in obj){
      if(obj[prop]>1){
        resultArr.push(parseInt(prop));
      }
    }
    return resultArr;
  },

  square: function(arr) {
    return arr.map(function(num){
      return num*num;
    });
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i]===target){
        result.push(i);
      }
    }
    return result;
  }
};
