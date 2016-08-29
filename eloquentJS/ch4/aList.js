function prepend(el, li) {
  return {
    value: el,
    rest: li
  };
}

function nth(list, num) {
  var temp = list;
  while(num > -1 && temp != null) {
    if(num === 0) {
      return temp.value;
    }
    num -= 1;
    temp = temp.rest;
  }
}

function nthRecursive(list, num) {
  if(num < 0 || list == null) {
    return undefined;
  }

  if(num === 0) {
    return list.value;
  }

  return nthRecursive(list.rest, num - 1);
}

function arrayToList(arr) {
  return arr.reverse().reduce((total, next) => prepend(next, total), null);
}

function listToArray(li) {
  var temp = [];
  
  while(li != null) {
    temp.push(li.value);
    li = li.rest;
  }

  return temp;
}

var li = arrayToList([1,2,3]);
console.log(li);
console.log(prepend(4, li));
console.log(nth(li, 0));
console.log(nth(li, 1));
console.log(nth(li, 2));
console.log(nth(li, 5));
console.log(nthRecursive(li, 0));
console.log(nthRecursive(li, 1));
console.log(nthRecursive(li, 2));
console.log(nthRecursive(li, 5));
console.log(listToArray(li));


