// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A.sort((a, b) => a - b);

  const newArrayMaxValue =
    A.length > 6 ? A.slice(0, 3).concat(A.slice(A.length - 3)) : A;

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < newArrayMaxValue.length; i++) {
    for (let j = i + 1; j < newArrayMaxValue.length; j++) {
      for (let q = j + 1; q < newArrayMaxValue.length; q++) {
        if (i !== j && i !== q && q !== j) {
          const product =
            newArrayMaxValue[i] * newArrayMaxValue[j] * newArrayMaxValue[q];

          if (product > max) {
            max = product;
          }
        }
      }
    }
  }

  return max;
}
