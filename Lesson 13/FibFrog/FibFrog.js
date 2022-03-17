// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let fibNumbers = [0, 1];
  const fibonacciHash = { 1: true };

  for (let i = 2; i < 30; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    fibonacciHash[fibNumbers[i]] = true;
  }

  const jumps = {};

  const n = A.length + 1;

  for (let i = A.length - 1; i >= -1; i--) {
    if (A[i] === 1 || i === -1) {
      const canFinish = fibonacciHash[n - (i + 1)];
      if (canFinish) {
        jumps[i] = 1;
      } else {
        let minJumps = Number.MAX_SAFE_INTEGER;
        for (let x = 1; fibNumbers[x] <= n - i; x++) {
          if (jumps[fibNumbers[x] + i]) {
            minJumps = Math.min(minJumps, jumps[fibNumbers[x] + i]);
          }
        }

        if (minJumps !== Number.MAX_SAFE_INTEGER) {
          jumps[i] = minJumps + 1;
        }
      }
    }
  }

  return jumps[-1] ? jumps[-1] : -1;
}
