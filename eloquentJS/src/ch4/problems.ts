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

export function nth<T>(li: List<T>, index: number): T | undefined {
  if(!li) return undefined;
  if(index < 0) return undefined;
  
  let ct = 0;
  let pointer: List<T> = li;

  while(ct <= index && pointer != null) {
    if(ct === index) return pointer.value;

    ct += 1;
    pointer = pointer.rest;
  }

  return undefined;
}

export function deepEqual(obj1: any, obj2: any): boolean {
  if(obj1 === obj2) return true;
  if(obj1 === null && obj2 !== null) return false;
  if(obj1 === undefined && obj2 !== undefined) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if(keys1.length !== keys2.length) return false;

  const combined = zip(keys1, keys2).sort();

  for (let [k1, k2] of combined) {
    if(k1 !== k2) return false;
    if(typeof obj1[k1] !== typeof obj2[k2]) return false;
    if(typeof obj1[k1] === "object" && !deepEqual(obj1[k1], obj2[k2])) return false;
    if(typeof obj1[k1] !== "object" && obj1[k1] !== obj2[k2]) return false;
  }

  return true;
}

function zip<T1, T2>(arr: T1[], arr2: T2[]): [T1, T2][] {
  const len = Math.min(arr.length, arr2.length);

  const combined: [T1, T2][] = [];

  for(let i = 0; i < len; i += 1) {
    const current: [T1, T2] = [arr[i], arr2[i]];

    combined.push(current);
  }

  return combined;
}
