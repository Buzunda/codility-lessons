// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const counter = {};
  for (let i = 0; i < A.length; i++) {
    if (counter[A[i]]) {
      counter[A[i]]++;
    } else {
      counter[A[i]] = 1;
    }
  }

  return Object.keys(counter).length;
}
