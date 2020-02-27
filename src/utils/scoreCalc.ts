const diffLevels = [0.1, 0.2, 0.3];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function scoreCalc(timeLeft: number, difficulty: number) {
  let clampedDiff = clamp(difficulty, 0, diffLevels.length - 1);
  let res = ((timeLeft * diffLevels[clampedDiff])) * 100;
  let normalize = Math.floor(res);
  return normalize <= 0 ? 0 : normalize;
}

export default scoreCalc;
