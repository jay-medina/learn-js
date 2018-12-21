import { loopingTriangle, fizzbuzz, chessBoard } from './problems';

describe('loopingTriangle', () => {
  it('prints out the triangle based on the length', () => {
    expect(loopingTriangle(7)).toMatchSnapshot();
  });
});

describe('fizzbuzz', () => {
  it('does fizzbuzz', () => {
    expect(fizzbuzz(100)).toMatchSnapshot();
  });
});

describe('chessboard', () => {
  it('prints out the chessboard', () => {
    expect(chessBoard(8)).toMatchSnapshot();
  });
});
