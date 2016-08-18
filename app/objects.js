exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.call(obj);g
  },

  alterObjects: function(constructor, greeting) {
  	return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var answerString = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        answerString.push(prop + ': ' + obj[prop]);
      }
    }
    return answerString;
  }
};
