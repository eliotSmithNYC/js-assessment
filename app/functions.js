exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arguments[1][0], arguments[1][1], arguments[1][2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
