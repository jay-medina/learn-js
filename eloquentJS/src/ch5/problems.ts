import SCRIPTS from './scripts';

export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((total, next) => {
    return total.concat(next);
  });
}

type Loop = <T>(init: T, condition: (step: T) => boolean, increment: (step: T) => T, body: (step: T) => void) => void;

export const loop: Loop = (init, condition, incre, body) => {
  let step = init;

  while (condition(step)) {
    body(step);
    step = incre(step);
  }
};

export const every = <T>(arr: T[], predicate: (step: T) => boolean): boolean => {
  for (let i of arr) {
    if (!predicate(i)) return false;
  }

  return true;
};

export const everyBySome = <T>(arr: T[], predicate: (step: T) => boolean): boolean => {
  return !some(arr, (n) => !predicate(n));
};

export const some = <T>(arr: T[], predicate: (step: T) => boolean): boolean => {
  for (let i of arr) {
    if (predicate(i)) return true;
  }

  return false;
};

type Direction = 'ltr' | 'rtl' | 'ttb';

export function dominantDirection(text: string): Direction {
  let s = countBy(text.split(''), (ch) => {
    let script = characterScript(ch.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  return s.reduce((highest, next) => {
    if (highest.count < next.count) return next;

    return highest;
  }).name as Direction;
}

function countBy<T, T2>(items: T[], groupBy: (item: T) => T2) {
  let counts = [];

  for (let item of items) {
    let name = groupBy(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code: number | undefined) {
  if (!code) return null;

  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
