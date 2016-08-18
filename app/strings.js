exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var strArr = str.split('');
  	var count = 1;
  	
  	for(var i=0; i<strArr.length; i++){
  	  if(strArr[i]===strArr[i+1]){
  	    count ++;
  	    if(count >amount){
  	      strArr.splice(i+1,1);
  	      i = i-1;
  	    }
  	  } else {
  	    count = 1;
  	  }
  	}
  	return strArr.join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
