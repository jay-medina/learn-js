
function every(arr, func) {
  for(var i in arr) {
    if(!func(arr[i])) {
      return false;
    }
  }
  return true;
}

function some(arr, func) {
  for(var i in arr) {
    if(func(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN), true);
// → true
console.log(every([NaN, NaN, 4], isNaN), false);
// → false
console.log(some([NaN, 3, 4], isNaN), true);
// → true
console.log(some([2, 3, 4], isNaN), false);
// → false