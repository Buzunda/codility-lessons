// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A.sort((a, b) => a - b);

  let start = 0;
  let end = A.length - 1;

  let minAbsSum = Number.MAX_SAFE_INTEGER;

  while (start <= end) {
    minAbsSum = Math.min(minAbsSum, Math.abs(A[start] + A[end]));

    if (Math.abs(A[start]) > Math.abs(A[end])) {
      start++;
    } else {
      end--;
    }
  }

  return minAbsSum;
}
