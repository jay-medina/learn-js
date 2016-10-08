function deepEqual(x, y) {
  for(var i in x) {
    var _x = x[i];
    var _y = y[i];
    if (isObject(_x) && isObject(_y)) {
      return deepEqual(_x, _y);
    }
    if(_x !== _y) {
      return false;
    }
  }
  return true;
}

function isObject(n) {
  return typeof n === 'object';
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj), true);
console.log(deepEqual(obj, {here: 1, object: 2}), false);
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}), true);