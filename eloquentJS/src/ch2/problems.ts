export function loopingTriangle(length: number, triangleChar = '#'): string {
  if (length <= 0) return '';

  let finalStr = '\n';

  for (let i = 1; i <= length; i += 1) {
    let tempStr = '';
    for (let j = 0; j < i; j += 1) {
      tempStr = tempStr + triangleChar;
    }
    finalStr = finalStr + tempStr + '\n';
  }

  return finalStr;
}

export function fizzbuzz(num: number) {
  let start = 1;
  let arr: string[] = [];

  while(start <= num) {
    if(start % 15 === 0) {
      arr.push('FizzBuzz');
    } else if(start % 5 === 0) {
      arr.push('Buzz')
    } else if(start % 3 === 0) {
      arr.push('Fizz')
    } else {
      arr.push(`${start}`);
    }

    start += 1;
  }

  return arr;
}

export function chessBoard(size: number, tile='#'): string {
  let board = '\n';

  for(let i = 1; i <= size; i += 1) {
    let line = '';
    for(let j = 1; j <= size; j +=1) {
      if((i + j) % 2 === 1) {
        line = line + tile;
      } else {
        line = line + ' ';
      }
    }
    board = board + line + '\n';
  }

  return board;
}
