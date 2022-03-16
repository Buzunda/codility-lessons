// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  const stack = [];
  for (let i = 0; i < S.length; i++) {
    const lastElement = stack[stack.length - 1];
    const currentElement = S[i];

    if (lastElement) {
      if (lastElement === "(" && currentElement === ")") {
        stack.pop();
      } else {
        stack.push(currentElement);
      }
    } else {
      stack.push(currentElement);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
