// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  const nailHash = {};
  for (let i = 0; i < C.length; i++) {
    const nail = C[i];
    if (!nailHash[nail]) {
      nailHash[nail] = i + 1;
    }
  }

  const planks = [];

  const START = 0;
  const END = 1;

  for (let i = 0; i < A.length; i++) {
    planks[i] = [A[i], B[i]];
  }

  planks.sort((a, b) => {
    if (a[START] === b[START]) {
      return b[END] - a[END];
    }
    return a[START] - b[START];
  });

  for (let i = 1; i < planks.length - 1; i++) {
    const currentPlank = planks[i];
    const lastPlank = planks[i - 1];
    if (
      currentPlank[START] >= lastPlank[START] &&
      currentPlank[END] <= lastPlank[END]
    ) {
      planks.splice(i - 1, 1);
      i--;
    }
  }

  C.sort((a, b) => a - b);

  let totalMinIndex = -1;

  for (let i = 0; i < planks.length; i++) {
    const minIndex = findMinimalNailForPlank(planks[i], C);

    if (minIndex === -1) {
      return -1;
    }
    totalMinIndex = Math.max(minIndex, totalMinIndex);
  }

  return totalMinIndex;

  function findMinimalNailForPlank(plank, nails) {
    let start = 0;
    let end = nails.length - 1;

    let result = Number.MAX_SAFE_INTEGER;

    while (start <= end) {
      let center = Math.ceil((start + end) / 2);

      if (nails[center] < plank[START]) {
        start = center + 1;
      } else if (nails[center] > plank[END]) {
        end = center - 1;
      } else {
        result = center;
        end = center - 1;
      }
    }

    if (result === Number.MAX_SAFE_INTEGER) {
      return -1;
    }

    let minIndex = nailHash[nails[result]];

    for (let i = result + 1; i < nails.length; i++) {
      if (nails[i] <= plank[END]) {
        minIndex = Math.min(nailHash[nails[i]], minIndex);
      } else {
        return minIndex;
      }
    }

    return minIndex;
  }
}
