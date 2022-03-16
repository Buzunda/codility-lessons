// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  const k = K % A.length;

  const newArray = A.map((x) => x);

  for (let i = 0; i < A.length; i++) {
    newArray[getPositionFor(i, A.length, k)] = A[i];
  }

  return newArray;
}

function getPositionFor(pos, len, k) {
  const newPos = pos + k;
  return newPos >= len ? newPos - len : newPos;
}
