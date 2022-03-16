// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  let remainderA = A % K;

  if (remainderA) {
    A = A + (K - remainderA);
  }

  if (A > B) {
    return 0;
  }

  return Math.floor((B - A) / K) + 1;
}
