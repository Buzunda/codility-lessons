// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)

  const stack = [];
  let sum = 0;

  for (let i = 0; i < H.length; i++) {
    const currentELement = H[i];
    const lastELementStack = stack[stack.length - 1] || 0;

    if (currentELement > lastELementStack) {
      stack.push(currentELement);
      sum++;
    } else if (currentELement < lastELementStack) {
      stack.pop();
      i--;
    }
  }

  return sum;
}
