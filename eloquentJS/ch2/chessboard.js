var SIZE = 8;

var line = '';

for(var i = 0; i < SIZE; i += 1) {
  line = '';

  for(var j = 0; j < SIZE; j += 1) {
    if(i % 2 === 0 && j % 2 === 0) {
      line += ' ';
    }
    else if(j % 2 === 1 && i % 2 === 1) {
      line += ' ';
    }
    else {
      line += '#';
    }
  }
  console.log(line);
}