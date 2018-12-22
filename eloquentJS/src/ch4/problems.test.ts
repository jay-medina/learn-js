import { range, sum, reverseArray, prepend, arrayToList, listToArray, nth, deepEqual } from './problems';

describe('range', () => {
  it('returns the range from start to end', () => {
    expect(range(1, 10)).toMatchSnapshot();
  });

  it('returns the range from 3 to 7', () => {
    expect(range(3, 7)).toMatchSnapshot();
  });

  it('returns an empty array when start > end', () => {
    expect(range(10, 1)).toEqual([]);
  });

  it('returns the range with a step', () => {
    expect(range(1, 10, 2)).toMatchSnapshot();
  });

  it('works with negative steps', () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });

  it('returns empty array when range is negative but start < end', () => {
    expect(range(2, 5, -1)).toEqual([]);
  });
});

describe('sum', () => {
  it('returns the sum of array of numbers', () => {
    expect(sum(range(1, 10))).toBe(55);
  });
});

describe('reverseArray', () => {
  it('returns the array of letters in reverse order', () => {
    expect(reverseArray(['A', 'B', 'C'])).toEqual(['C', 'B', 'A']);
  });

  it('returns the array of numbers in reverse order', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('arrayToList', () => {
  it('converts an array of numbers to a linked list', () => {
    expect(arrayToList([1, 2, 3, 4])).toMatchSnapshot();
  });

  it('converts an empty array to null', () => {
    expect(arrayToList([])).toBe(null);
  });
});

describe('listToArray', () => {
  it('converts a list to an array of numbers', () => {
    const original = [1, 2, 3, 4];
    const li = arrayToList(original);

    expect(listToArray(li)).toEqual(original);
  });
});

describe('prepend', () => {
  it('prepends the new element onto an empty list', () => {
    const li = null;

    expect(prepend(10, li)).toMatchSnapshot();
  });

  it('prepends the new element onto the list', () => {
    const li = arrayToList([1, 2, 3, 4]);

    expect(prepend(10, li)).toMatchSnapshot();
  });
});

describe('nth', () => {
  it('returns the nth element', () => {
    const li = arrayToList([1, 2, 3, 4]);

    expect(nth(li, 1)).toBe(2);
  });

  it('returns undefined', () => {
    const li = arrayToList([1, 2, 3, 4]);

    expect(nth(li, 10)).toBeUndefined();
    expect(nth(li, -10)).toBeUndefined();
  });
});

describe('deepEqual', () => {
  it('comparing same object', () => {
    const obj = {here: {is: 'an'}, object: 2};

    expect(deepEqual(obj, obj)).toBe(true);
  });
  it('comparing diff object', () => {
    const obj = {here: {is: 'an'}, object: 2};
    const obj2 = {here: 1, object: 2};

    expect(deepEqual(obj, obj2)).toBe(false);
  });
  it('comparing same object', () => {
    const obj = {here: {is: 'an'}, object: 2};
    const obj2 = {here: {is: 'an'}, object: 2};
    expect(deepEqual(obj, obj2)).toBe(true);
  });
});
