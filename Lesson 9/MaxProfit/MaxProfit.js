// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxProfit = 0;
  let currentProfit = 0;
  let possibleBuyInPrice = 0;

  for (let i = 0; i < A.length; i++) {
    const currentPrice = A[i];
    if (i > 0) {
      currentProfit = Math.max(0, currentPrice - possibleBuyInPrice);
      maxProfit = Math.max(maxProfit, currentProfit);
    }

    if (currentProfit === 0 || i === 0) {
      possibleBuyInPrice = currentPrice;
    }
  }

  return maxProfit;
}
