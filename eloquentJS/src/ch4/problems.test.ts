import { range, sum } from './problems';

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
