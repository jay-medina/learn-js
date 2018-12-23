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
