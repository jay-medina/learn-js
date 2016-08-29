function range(start, end) {
  var r = [];
  var i = start;

  while( i <= end) {
    r.push(i);
    i += 1;
  }

  return r;
}

function sum(nums) {
  return Math.sum.apply(Math, nums);
}