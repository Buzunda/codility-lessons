// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxAt = [A[0]];

  for (let i = 1; i < A.length; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i - 1; j >= 0 && j >= i - 6; j--) {
      max = Math.max(max, A[i] + maxAt[j]);
    }
    maxAt[i] = max;
  }

  return maxAt[A.length - 1];
}
