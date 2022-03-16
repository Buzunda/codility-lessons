// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let minValue = (A[0] + A[1]) / 2;
  let minValuePosition = 0;
  let N = A.length;

  for (let i = 0; i < N - 2; i++) {
    let tempMinValue = Math.min(
      (A[i] + A[i + 1]) / 2,
      (A[i] + A[i + 1] + A[i + 2]) / 3
    );

    if (tempMinValue < minValue) {
      minValue = tempMinValue;
      minValuePosition = i;
    }
  }

  if ((A[N - 2] + A[N - 1]) / 2 < minValue) {
    minValuePosition = N - 2;
  }

  return minValuePosition;
}
