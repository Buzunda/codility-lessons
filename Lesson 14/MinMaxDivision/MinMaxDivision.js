// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = A.length;

  let minimumValue = 0;
  let maximumValue = 0;

  for (let i = 0; i < n; i++) {
    maximumValue = maximumValue + A[i];

    if (A[i] > minimumValue) {
      minimumValue = A[i];
    }
  }

  if (K === 1) {
    return maximumValue;
  } else if (K >= n) {
    return minimumValue;
  }

  while (minimumValue <= maximumValue) {
    const targetValue = Math.floor((minimumValue + maximumValue) / 2);

    if (validSlice(targetValue, A, K)) {
      maximumValue = targetValue - 1;
    } else {
      minimumValue = targetValue + 1;
    }
  }

  return minimumValue;
}

function validSlice(targetValue, A, K) {
  let sum = 0;
  let countBlocks = 0;
  for (let i = 0; i < A.length; i++) {
    if (sum + A[i] > targetValue) {
      countBlocks++;
      sum = A[i];
    } else {
      sum += A[i];
    }
  }
  return countBlocks < K;
}
