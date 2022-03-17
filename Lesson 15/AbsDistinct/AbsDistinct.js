// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const distinct = {};
  for (let i = 0; i < A.length; i++) {
    distinct[Math.abs(A[i])] = true;
  }
  return Object.keys(distinct).length;
}
