// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let i = 1;
  const perimeters = [];

  while (i * i < N) {
    if (N % i === 0) {
      perimeters.push(perimeter(i, N / i));
    }
    i++;
  }
  if (i * i === N) {
    perimeters.push(perimeter(i, i));
  }

  perimeters.sort((a, b) => a - b);

  return perimeters[0];
}

function perimeter(a, b) {
  return 2 * (a + b);
}
