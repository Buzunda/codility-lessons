// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)

  const impactFactor = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };

  const matrix = [];
  matrix[-1] = [0, 0, 0, 0];
  matrix[0] = [0, 0, 0, 0];
  matrix[0][impactFactor[S[0]] - 1]++;

  for (let i = 0; i < S.length; i++) {
    const factor = impactFactor[S[i]];

    matrix[i] = [...matrix[i - 1]];
    matrix[i][factor - 1]++;
  }

  const result = [];

  for (let i = 0; i < P.length; i++) {
    const start = matrix[P[i] - 1];
    const end = matrix[Q[i]];

    const subArray = subtractArrays(start, end);
    result.push(subArray);
  }

  return result;
}

function subtractArrays(start, end) {
  const result = [];
  for (let i = 0; i < start.length; i++) {
    result[i] = end[i] - start[i];
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] > 0) {
      return i + 1;
    }
  }

  return 0;
}
