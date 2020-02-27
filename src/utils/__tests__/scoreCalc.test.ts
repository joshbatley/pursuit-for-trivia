import scoreCalc from '../scoreCalc';

describe('scoreCalc', () => {
  test('returns the correct calc as list in comments below', () => {
    expect(scoreCalc(10, 1)).toBe(200);
  });
  test('doesntly return a negative value', () => {
    expect(scoreCalc(-10, 1)).toBe(0);
  });
  test('if difficulty doesnt exist calmps to the nearest', () => {
    expect(scoreCalc(10, 3)).toBe(300);
    expect(scoreCalc(10, -1)).toBe(100);
  });
  test('returns a number with 0dp(remebering floating point maths & flooring)', () => {
    expect(scoreCalc(18, 2)).toBe(540);
  });
});
