export function range(start: number, end: number, step = 1): number[] {
  if (start > end && step > 0) return [];
  if (start < end && step < 0) return [];

  let arr: number[] = [];

  if (start < end) {
    for (let i = start; i <= end; i = i + step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + step) {
      arr.push(i);
    }
  }

  return arr;
}

export function sum(n: number[]): number {
  let s = 0;

  for (let x of n) {
    s += x;
  }

  return s;
}

export function reverseArray<T>(arr: T[]): T[] {
  let reversed: T[] = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversed.push(arr[i]);
  }

  return reversed;
}
