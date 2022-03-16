// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxSumCurrent = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    const currentValue = A[i];

    maxSumCurrent = Math.max(currentValue, maxSumCurrent + currentValue);
    maxSum = Math.max(maxSum, maxSumCurrent);
  }

  return maxSum;
}
