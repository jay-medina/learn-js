const ancestry = require('./ancestry');
/**
 * 
 * Using the example data set from this chapter, compute the average age 
 * difference between mothers and children (the age of the mother when the 
 * child is born). You can use the average function defined earlier in 
 * this chapter.
 * 
 * Note that not all the mothers mentioned in the data are themselves present 
 * in the array. The byName object, which makes it easy to find a person’s object 
 * from their name, might be useful here.
 */
var data = JSON.parse(ancestry);
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
data.forEach(function(person) {
  byName[person.name] = person;
});

var mothersAges = [];
var child, momName, mom;

for(const i in byName) {
  child = byName[i];
  momName = child.mother;
  mom = byName[momName];
  if(mom) {
    mothersAges.push(child.born - mom.born);
  }
}

console.log(average(mothersAges), 31.2);