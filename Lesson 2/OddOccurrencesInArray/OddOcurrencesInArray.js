// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const stacks = {};

  for (let i = 0; i < A.length; i++) {
    stacks[A[i]] = !stacks[A[i]];
  }

  const keys = Object.keys(stacks);

  for (let i = 0; i < keys.length; i++) {
    if (stacks[keys[i]]) {
      return parseInt(keys[i]);
    }
  }
}
