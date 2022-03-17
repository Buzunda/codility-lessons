// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
  // write your code in JavaScript (Node.js 8.9.4)
  const lowestMultiple = lcm(N, M);

  return lowestMultiple / M;
}

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
