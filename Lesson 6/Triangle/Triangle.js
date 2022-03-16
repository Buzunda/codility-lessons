// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const sortedArray = A.sort((a, b) => a - b);

  let P, Q, R;

  for (let p = 0; p < sortedArray.length; p++) {
    P = sortedArray[p];

    for (let q = p + 1; q < sortedArray.length; q++) {
      Q = sortedArray[q];

      if (P < 0 && Q < 0) {
        break;
      }

      for (let r = q + 1; r < sortedArray.length; r++) {
        R = sortedArray[r];
        if (P + Q < R) {
          break;
        }

        const result = isTriangle(P, Q, R);
        if (result) {
          return 1;
        }
      }
    }
  }

  return 0;
}

function isTriangle(p, q, r) {
  return p + q > r && p + r > q && q + r > p;
}
