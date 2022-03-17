// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  const result = [];

  const fibonacci = [1, 1];
  const max2Pow = Math.pow(2, 30);

  for (let i = 2; i <= 50000; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % max2Pow;
  }

  for (let i = 0; i < A.length; i++) {
    result[i] = fibonacci[A[i]] % Math.pow(2, [B[i]]);
  }

  return result;
}
