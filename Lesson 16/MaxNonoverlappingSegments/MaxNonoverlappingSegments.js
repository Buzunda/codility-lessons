// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = A.length;
  if (n === 0) {
    return 0;
  }
  let result = [0];

  let lastCandidate = [A[0], B[0]];

  for (let i = 1; i < n; i++) {
    const lastIndex = result.length - 1;

    let last = [-1, -1];
    if (lastIndex >= 0) {
      last = [A[result[lastIndex]], B[result[lastIndex]]];
    }

    if (A[i] > last[0] && A[i] > last[1]) {
      result.push(i);
      lastCandidate = [A[i], B[i]];
    } else if (A[i] > lastCandidate[0] && A[i] > lastCandidate[1]) {
      result.pop();

      result.push(i - 1);
      result.push(i);
      lastCandidate = last;
    } else {
      lastCandidate = [A[i], B[i]];
    }
  }

  return result.length;
}
