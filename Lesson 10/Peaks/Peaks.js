// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let peaks = [];
  const n = A.length;

  for (let i = 1; i < n - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  if (peaks.length === 0) {
    return 0;
  }

  let isPrime = true;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    return 1;
  }

  let maxGroups = peaks.length;

  while (maxGroups > 0) {
    if (n % maxGroups !== 0) {
      maxGroups--;
    } else {
      const possibleGroupSize = n / maxGroups;
      let blocks = 0;

      for (let i = 0; i < peaks.length; i++) {
        const groupEnd = (blocks + 1) * possibleGroupSize - 1;

        if (groupEnd >= peaks[i]) {
          blocks++;

          while (groupEnd >= peaks[i + 1]) {
            i++;
          }
        }
        if (blocks >= maxGroups) {
          return maxGroups;
        }
      }
      maxGroups--;
    }
  }
  return 0;
}
