function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const peaks = [];
  const peaksObject = {};

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
      peaksObject[i] = true;
    }
  }

  if (peaks < 2) {
    return peaks.length;
  }
  let possibleResult = Math.ceil(Math.sqrt(A.length));

  while (possibleResult > 0) {
    let flagsSet = 1;
    let lastFlag = peaks[0];
    for (let i = 1; i < peaks.length; i++) {
      if (lastFlag + possibleResult <= peaks[i]) {
        flagsSet++;
        lastFlag = peaks[i];
      }

      if (flagsSet >= possibleResult) {
        return possibleResult;
      }

      if (peaks.length - i + 1 + flagsSet < possibleResult) {
        break;
      }
    }

    possibleResult--;
  }

  return possibleResult;
}
