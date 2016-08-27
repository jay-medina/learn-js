function countChar(str, letter) {
  return str.split('').filter(x => x === letter).length;
}

function countBs(str) {
  return countChar(str, 'B');
}