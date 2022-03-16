// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const sumA = [];
  const sumAReverse = [];

  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      sumA[i] = A[i];
    } else {
      sumA[i] = A[i] + sumA[i - 1];
    }
    const reverseElement = A.length - 1 - i;

    if (i === 0) {
      sumAReverse[reverseElement] = A[reverseElement];
    } else {
      sumAReverse[reverseElement] =
        A[reverseElement] + sumAReverse[reverseElement + 1];
    }
  }

  let minimalDifference = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length - 1; i++) {
    const absoluteDifference = Math.abs(sumA[i] - sumAReverse[i + 1]);
    if (minimalDifference > absoluteDifference) {
      minimalDifference = absoluteDifference;
    }
  }
  return minimalDifference;
}
