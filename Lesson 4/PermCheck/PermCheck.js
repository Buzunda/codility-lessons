// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const n = A.length;

  const countElements = {};
  const sumN = (n * (n + 1)) / 2;

  let sumElements = 0;

  for (let i = 0; i < n; i++) {
    if (countElements[A[i]]) {
      return 0;
    } else if (A[i] <= n && A[i] > 0) {
      countElements[A[i]] = true;
      sumElements += A[i];
    }
    if (sumN === sumElements) {
      return 1;
    }
  }

  return 0;
}
