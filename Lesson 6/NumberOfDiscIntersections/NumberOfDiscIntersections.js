// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const circles = [];

  const MAX = 10000000;

  for (let i = 0; i < A.length; i++) {
    const radius = A[i];
    circles[i] = [i - radius, i + radius];
  }

  const circlesAscending = [...circles.sort((a, b) => a[0] - b[0])];

  let intersections = 0;
  for (let i = 0; i < A.length; i++) {
    const currentCircle = circlesAscending[i];

    for (let j = i + 1; j < A.length; j++) {
      const candidateCircle = circlesAscending[j];

      if (
        currentCircle[1] >= candidateCircle[0] ||
        currentCircle[1] >= candidateCircle[1]
      ) {
        intersections++;
        if (intersections > MAX) {
          return -1;
        }
      } else {
        break;
      }
    }
  }

  return intersections;
}
