import scoreCalc from '../scoreCalc';

describe('scoreCalc', () => {
  test('returns the correct calc as list in comments below', () => {
    expect(scoreCalc(10, 1)).toBe(200);
  });
  test('doesntly return a negative value', () => {
    expect(scoreCalc(-10, 1)).toBe(0);
  });
  test('if difficulty doesnt exist throw error', () => {
    expect(() => scoreCalc(10, 4)).toThrow();
    expect(() => scoreCalc(10, 4)).toThrowError('difficulty out of range');
  });
  test('returns a number with 0dp(remebering floating point maths & flooring)', () => {
    expect(scoreCalc(18, 2)).toBe(540);
  });
});
