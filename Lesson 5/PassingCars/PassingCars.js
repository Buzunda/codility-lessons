// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const carsGoingWest = [];

  const EAST = 0;
  const WEST = 1;

  for (let i = A.length - 1; i >= 0; i--) {
    if (i === A.length - 1) {
      if (A[i] === WEST) {
        carsGoingWest[i] = 1;
      } else {
        carsGoingWest[i] = 0;
      }
    } else {
      if (A[i] === WEST) {
        carsGoingWest[i] = carsGoingWest[i + 1] + 1;
      } else {
        carsGoingWest[i] = carsGoingWest[i + 1];
      }
    }
  }

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === EAST && carsGoingWest[i]) {
      result += carsGoingWest[i];
    }
    if (result > 1000000000) {
      return -1;
    }
  }

  return result;
}
