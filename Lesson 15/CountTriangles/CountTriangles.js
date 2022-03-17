// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = A.length;
  A.sort((a, b) => a - b);
  let count = 0;

  if (A.length < 3) {
    return 0;
  }

  for (let p = 0; p < n; p++) {
    let r = p + 2;
    for (let q = p + 1; q < n; q++) {
      while (r < n && A[p] + A[q] > A[r]) {
        count += r - q;
        r++;
      }
    }
  }

  return count;
}
