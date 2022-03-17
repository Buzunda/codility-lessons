// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');\

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let allNumbers = {};
  for (let i = 0; i < A.length; i++) {
    if (allNumbers[A[i]]) {
      allNumbers[A[i]]++;
    } else {
      allNumbers[A[i]] = 1;
    }
  }

  let factors = {};

  for (let i = 0; i < A.length; i++) {
    let f = 1;
    const currentValue = A[i];

    if (!factors[currentValue]) {
      factors[currentValue] = [];

      while (f * f < currentValue) {
        if (currentValue % f === 0) {
          if (allNumbers[f]) {
            for (let m = 0; m < allNumbers[f]; m++) {
              factors[currentValue].push(f);
            }
          }

          if (allNumbers[currentValue / f]) {
            for (let m = 0; m < allNumbers[currentValue / f]; m++) {
              factors[currentValue].push(currentValue / f);
            }
          }
        }
        f++;
      }
      if (f * f === currentValue) {
        if (allNumbers[f]) {
          for (let m = 0; m < allNumbers[f]; m++) {
            factors[currentValue].push(f);
          }
        }
      }
    }
  }

  let result = [];

  for (let i = 0; i < A.length; i++) {
    result[i] = A.length - factors[A[i]].length;
  }

  return result;
}
