function reverseArray(arr) {
  var t = [];

  arr.forEach(x => t.unshift(x));

  return t;
}

function reverseArrayInPlace(arr) {
  var i = 0;
  var temp;
  var length = arr.length;

  while (i < arr.length / 2) {
    temp = arr[i];
    arr[i] = arr[length-1-i];
    arr[length-i-1] = temp;
    i += 1;
  }

}

console.log(reverseArray([1,2,3,4,5]));
var temp = ['a','b','c'];
reverseArrayInPlace(temp);
console.log(temp);