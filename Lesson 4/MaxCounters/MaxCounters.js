// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let result = [];
  let currentMax = 0;

  let maxCounter = -1;

  for (let i = 0; i < N; i++) {
    result[i] = 0;
  }

  for (let i = 0; i < A.length; i++) {
    const currentCounter = A[i] - 1;

    if (currentCounter >= N) {
      maxCounter = currentMax;
    } else {
      if (maxCounter > result[currentCounter]) {
        result[currentCounter] = maxCounter;
      }
      result[currentCounter] = result[currentCounter] + 1;
      currentMax = Math.max(currentMax, result[currentCounter]);
    }
  }

  for (let i = 0; i < N; i++) {
    if (maxCounter > result[i]) {
      result[i] = maxCounter;
    }
  }

  return result;
}
