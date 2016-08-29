function range(start, end, step) {
  var i = start;
  step = step || 1;

  function stepper(start, end, comp) {
     var r = [];
     while(comp(i,end)) {
        r.push(i);
        i += step;
     }
     return r; 
  }
  
  if(step < 0 && start < end) {
    return [];
  }
  else if(step < 0) {
    return stepper(start,end, (i, e) => i >= e);
  }

  return stepper(start,end, (i, e) => i <= e);
}

function sum(nums) {
  return nums.reduce((total, next) => total + next, 0);
}

console.log(range(1,5));
console.log(range(1,5,2));
console.log(range(1,5, -2));
console.log(range(5, 1, -2));
console.log(range(5,1, -1));
console.log(range(5,1));
console.log(sum(range(1,5)));