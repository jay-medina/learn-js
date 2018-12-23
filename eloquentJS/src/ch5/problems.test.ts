import { flatten, loop, every, everyBySome, some, dominantDirection } from './problems';

describe('flatten', () => {
  it('flattens a nested array', () => {
    const arrs = [[1, 2, 3], [4, 5], [6]];
    const result = flatten(arrs);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('loop', () => {
  it('runs three times', () => {
    const fn = jest.fn();
    const number: number = 3;

    loop(number, (n) => n > 0, (n) => n - 1, fn);

    expect(fn).toBeCalledTimes(3);
  });
});

describe('every', () => {
  const predicate = (n: number) => n < 10;

  it('checks all nums < 10', () => {
    expect(every([1, 3, 5], predicate)).toBe(true);
  });

  it('checks all nums < 10 - pt2', () => {
    expect(every([2, 4, 16], predicate)).toBeFalsy();
  });

  it('checks all nums < 10', () => {
    expect(every([], predicate)).toBeTruthy();
  });
});

describe('some', () => {
  const predicate = (n: number) => n < 10;

  it('checks all nums < 10', () => {
    expect(some([1, 3, 5], predicate)).toBe(true);
  });

  it('checks all nums < 10 - pt2', () => {
    expect(some([2, 4, 16], predicate)).toBeTruthy();
  });

  it('checks all nums < 10', () => {
    expect(some([], predicate)).toBeFalsy();
  });
});

describe('everySome', () => {
  const predicate = (n: number) => n < 10;

  it('checks all nums < 10', () => {
    expect(everyBySome([1, 3, 5], predicate)).toBe(true);
  });

  it('checks all nums < 10 - pt2', () => {
    expect(everyBySome([2, 4, 16], predicate)).toBeFalsy();
  });

  it('checks all nums < 10', () => {
    expect(everyBySome([], predicate)).toBeTruthy();
  });
});

describe('dominantDirection', () => {
  it('ltr', () => {
    expect(dominantDirection('Hello!')).toBe('ltr');
  });
  it('rtl', () => {
    expect(dominantDirection('Hey, مساء الخير')).toBe('rtl');
  });
});
