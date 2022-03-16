// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const leafCounter = {};

  const sumN = sum(X);

  let tmpSum = 0;

  for (let i = 0; i < A.length; i++) {
    if (leafCounter[A[i]]) {
      leafCounter[A[i]]++;
    } else {
      leafCounter[A[i]] = 1;
      tmpSum += A[i];
    }

    if (tmpSum === sumN) {
      return i;
    }
  }

  return -1;
}

function sum(n) {
  return (n * (n + 1)) / 2;
}
