// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A.sort((a, b) => a - b);

  let smallestPositive = 1;

  for (let i = 0; i < A.length; i++) {
    const currentInteger = A[i];
    if (currentInteger > 0 && currentInteger === smallestPositive) {
      smallestPositive = smallestPositive + 1;
    } else if (currentInteger > smallestPositive) {
      return smallestPositive;
    }
  }

  return smallestPositive;
}
