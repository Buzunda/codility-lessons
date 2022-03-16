// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let ASum = 0;

  for (let i = 0; i < A.length; i++) {
    ASum += A[i];
  }

  return sum(A.length + 1) - ASum;
}


// This is equal to the formula (n*(n+1))/2
function sum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}
