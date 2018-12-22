export const min = (a: number, b: number) => {
  if (a < b) return a;

  return b;
};

export const isEven = (a: number): boolean => {
  function check(a: number): boolean {
    if (a === 0) return true;
    if (a === 1) return false;

    return check(a - 2);
  }

  if (a < 0) return check(a * -1);

  return check(a);
};


export const countBs = (str: string): number => countChar(str, 'B');

export const countChar = (str: string, ch: string): number => {
  let ct = 0;

  for(let s of str) {
    if(s === ch) {
      ct += 1;
    }
  }

  return ct;
}
