var hi = function(name) {
  return 'Hi' + name;
};

var greeting = hi;

var getServerStuff = function(callback) {
  return ajaxCall(function(json) {
    return callback(json);
  });
};

var getServerStuff = ajaxCall;