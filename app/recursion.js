exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var directories = [];

    function sortData(obj){
        var dir = obj.dir;
        var files = obj.files;
        var file;
        
        directories.push(dir);

        for(var i=0; i<files.length; i++){
            file = files[i];
            if(typeof file==='string'){
                if(!dirName || directories.indexOf(dirName) >-1){
                    listOfFiles.push(file);
                }
            } else{
                sortData(file);
            };
        }
        directories.pop();

    };
    sortData(data);
    return listOfFiles;
  },

// I could not arrive at this answer myself, but I agonized over it and 
// went over your answer painstakingly in the debugger as well as on paper.
// after posting on stack-overflow http://stackoverflow.com/questions/38907337/how-does-this-recursive-array-permutation-function-work-under-the-hood
// I found some great advice and finally understand how the call stack is ordered in this recursive 
//function. Finally coming to understand this was was one of the greatest highs I've had in a while.

  permute: function(arr) {
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt();
        } else {
          // otherwise, log the result and move on
          logResult();
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }
    }

    doIt();
    return answer;
  },

  fibonacci: function(n) {
    if(n<=2){
      return 1;
    } else {
      return this.fibonacci(n-2)+this.fibonacci(n-1);
    }

  },

  validParentheses: function(n) {
    var combos = [ ]; //to store your results
    function getCombinations(openNum,closingNum,curr) {
        if (openNum === 0 && closingNum === 0)
            combos.push(curr);
        if (openNum > 0) {
            getCombinations(openNum-1, closingNum + 1, curr + "(");
        }
        if (closingNum > 0) {
            getCombinations(openNum, closingNum - 1, curr + ")");
        }
    }
    getCombinations(n,0,"");
    return combos;
  }
};
