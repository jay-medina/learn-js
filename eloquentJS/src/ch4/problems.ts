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
  let reversed: T[] = Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversed[arr.length - i - 1] = arr[i];
  }

  return reversed;
}

interface Node<T> {
  value: T;
  rest: Node<T> | null;
}

type List<T> = Node<T> | null;

export function arrayToList<T>(arr: T[]): List<T> {
  if (arr.length === 0) return null;

  let li = null;
  let arrReversed = reverseArray(arr);

  for (let a of arrReversed) {
    li = prepend(a, li);
  }

  return li;
}

export function listToArray<T>(list: List<T>): T[] {
  if (!list) return [];

  let arr: T[] = [];
  let pointer: List<T> = list;

  while(pointer != null) {
    arr.push(pointer.value);
    pointer = pointer.rest;
  }

  return arr;
}

export function prepend<T>(element: T, li: List<T>): List<T> {
  return {
    value: element,
    rest: li,
  };
}

// export function nth<T>(li: List<T>, index: number): T | undefined {

// }
