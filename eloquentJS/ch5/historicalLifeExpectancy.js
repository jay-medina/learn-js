const ancestry = require('./ancestry');

var data = JSON.parse(ancestry);
function average(array) {
  return array.reduce((a,b) => a + b) / array.length;
}

var centuries = {};
var year, century;
var person;

function calcCentury(year) {
  return Math.ceil(year / 100);
}

for(const i in data) {
  person = data[i];
  century = calcCentury(person.died);
  if(centuries[century]) {
    centuries[century].push(person.died - person.born);
  }
  else {
    centuries[century] = [person.died - person.born];
  }
}

for(const i in centuries) {
  centuries[i] = average(centuries[i]);
}
console.log(centuries);