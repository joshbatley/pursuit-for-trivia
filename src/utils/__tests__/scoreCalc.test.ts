import scoreCalc from '../scoreCalc';

describe('scoreCalc', () => {
  it('returns the correct calc as list in comments below', () => {
    // (timeLeft * difficulty) * (correctMultiplier) * 10
    // (10 * 0.2) * (1) * 10 = 20
    expect(scoreCalc(10, 1, 1)).toBe(20);
  });
  it('doesntly return a negative value', () => {
    expect(scoreCalc(-10, 1, 1)).toBe(0);
  });
  it('if difficulty doesnt exist throw error', () => {
    expect(() => scoreCalc(10, 4, 1)).toThrow();
    expect(() => scoreCalc(10, 4, 1)).toThrowError('difficulty out of range');
  });
  it('returns a number with 0dp(remebering floating point maths & flooring)', () => {
    // (18 * 0.3) * (4) * 10 = 216 <- (normal maths)
    // (18 * 0.3) * (4) * 10 = 215.999... <- (floating point math)
    expect(scoreCalc(18, 2, 4)).toBe(215);
  });
});
