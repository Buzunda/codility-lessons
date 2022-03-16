// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const bracketStack = [];

  for (let i = 0; i < S.length; i++) {
    const currentElement = S[i];

    if (
      currentElement === "[" ||
      currentElement === "{" ||
      currentElement === "("
    ) {
      bracketStack.push(currentElement);
    } else {
      const lastElement = bracketStack[bracketStack.length - 1];

      if (!lastElement) return 0;

      if (
        (currentElement === "]" && lastElement === "[") ||
        (currentElement === "}" && lastElement === "{") ||
        (currentElement === ")" && lastElement === "(")
      ) {
        bracketStack.pop();
      } else {
        bracketStack.push(currentElement);
      }
    }
  }

  return bracketStack.length === 0 ? 1 : 0;
}
