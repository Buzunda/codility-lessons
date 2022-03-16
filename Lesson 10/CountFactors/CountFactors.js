// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (N === 1) {
    return 1;
  }
  let countFactors = 0;
  let i = 1;
  while (i * i < N) {
    if (N % i === 0) {
      countFactors += 2;
    }
    i++;
    if (i * i === N) {
      countFactors += 1;
    }
  }

  return countFactors;
}
