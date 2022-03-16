
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binaryString = N.toString(2);
  let largestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] == 0) {
      currentGap++;
    } else {
      if (currentGap > largestGap) {
        largestGap = currentGap;
      }
      currentGap = 0;
    }
  }

  return largestGap;
}
