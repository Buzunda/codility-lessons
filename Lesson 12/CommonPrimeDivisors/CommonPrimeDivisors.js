// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    if (hasAllPrimeFactors(A[i], B[i]) && hasAllPrimeFactors(B[i], A[i])) {
      result++;
    }
  }
  return result;
}

function hasAllPrimeFactors(a, b) {
  if (b === 1) {
    return true;
  }
  const greatestDivisor = gcd(a, b);
  if (greatestDivisor === 1) {
    return false;
  }
  return hasAllPrimeFactors(a, b / greatestDivisor);
}

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}
