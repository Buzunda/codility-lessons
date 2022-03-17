// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const MAX_SLICES = 1000000000;

  let N = A.length;
  let start = 0;
  let end = 0;
  let count = 0;
  let countSlices = 0;
  let check = {};

  while (start < N) {
    while (end < N && !check[A[end]]) {
      countSlices += 1;
      check[A[end]] = true;
      end += 1;
    }

    check[A[start]] = false;

    start += 1;
    count += countSlices;
    countSlices -= 1;

    if (count >= MAX_SLICES) {
      return MAX_SLICES;
    }
  }

  return count;
}
