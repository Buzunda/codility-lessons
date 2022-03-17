function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let stepCounter = [0];
  let sumArrayTotal = 0;
  const countValues = {};

  if (A.length === 1) {
    return A[0];
  }

  for (let i = 0; i < A.length; i++) {
    const currentElement = Math.abs(A[i]);

    sumArrayTotal += currentElement;
    if (countValues[currentElement]) {
      countValues[currentElement]++;
    } else {
      countValues[currentElement] = 1;
    }
  }

  const center = sumArrayTotal / 2;

  for (let i = 1; i <= center; i++) {
    stepCounter[i] = -1;
  }

  const keys = Object.keys(countValues);

  for (let k = 0; k < keys.length; k++) {
    const value = parseInt(keys[k]);

    const valueCount = countValues[value];

    stepCounter[0] = valueCount;

    for (let i = 1; i < stepCounter.length; i++) {
      if (stepCounter[i] >= 0) {
        stepCounter[i] = valueCount;
      } else if (i - value >= 0) {
        stepCounter[i] = stepCounter[i - value] - 1;
      }

      if (stepCounter[stepCounter.length - 1] >= 0) {
        return (center - (stepCounter.length - 1)) * 2;
      }
    }
  }

  for (let i = stepCounter.length - 1; i > 0; i--) {
    if (stepCounter[i] >= 0) {
      return (center - i) * 2;
    }
  }

  return 0;
}
