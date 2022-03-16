// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sortedArray = [...A].sort((a, b) => a - b);

  let candidate = -1;
  let candidateCount = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    const currentElement = sortedArray[i];

    if (candidate !== currentElement) {
      candidate = currentElement;
      candidateCount = 0;
      candidateCount++;
    } else {
      candidateCount++;
    }
    if (candidateCount > A.length / 2) {
      return A.indexOf(candidate);
    }
  }

  return -1;
}
