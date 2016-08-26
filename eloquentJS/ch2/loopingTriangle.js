var hash = '';

for(var i = 0; i < 7; i += 1) {
  hash = '';
  for(var j = 0; j <= i; j += 1) {
    hash += '#';
  }
  console.log(hash);
}