import { min, isEven, countBs, countChar } from './problems';

describe('min', () => {
  it('returns the min of two numbers', () => {
    expect(min(0, 10)).toBe(0);
  });

  it('returns the min of two numbers', () => {
    expect(min(0, -10)).toBe(-10);
  });
});

describe('isEven', () => {
  it('checks for 50', () => {
    expect(isEven(50)).toBe(true);
  });

  it('checks for 75', () => {
    expect(isEven(75)).toBe(false);
  });

  it('checks for -1', () => {
    expect(isEven(-1)).toBe(false);
  });
});

describe('countBs', () => {
  it('returns number of Bs', () => {
    expect(countBs('BBC')).toBe(2);
  });
});

describe('countChar', () => {
  it('returns number of Bs', () => {
    expect(countChar('BBC', 'B')).toBe(2);
  });

  it('returns number of Bs', () => {
    expect(countChar('kakkerlak', 'k')).toBe(4);
  });
});
