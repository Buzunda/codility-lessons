// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  const UPSTREAM = 0;
  const DOWNSTREAM = 1;

  const fishStack = [];

  for (let i = 0; i < A.length; i++) {
    const lastFish = fishStack[fishStack.length - 1];
    if (lastFish !== undefined) {
      if (B[lastFish] === DOWNSTREAM && B[i] === UPSTREAM) {
        if (A[i] > A[lastFish]) {
          fishStack.pop();
          i--;
        }
      } else {
        fishStack.push(i);
      }
    } else {
      fishStack.push(i);
    }
  }

  return fishStack.length;
}
