const diffLevels = [0.1, 0.2, 0.3];

function scoreCalc(timeLeft: number, difficulty: number, correctMultiplier: number) {
  if (diffLevels.length <= difficulty) {
    throw new Error('difficulty out of range');
  }
  let res = ((timeLeft * diffLevels[difficulty]) * correctMultiplier) * 10;
  let normalize = Math.floor(res);
  return normalize <= 0 ? 0 : normalize;
}

export default scoreCalc;
