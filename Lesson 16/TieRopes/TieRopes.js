// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
  const n = A.length;
  let ropes = 0;

  if (n === 1) return A[0] >= K ? 1 : 0;

  let left = 0;
  let right = 0;
  let ropeLength = 0;

  while (right < n) {
    ropeLength += A[right];

    if (ropeLength >= K) {
      ropes += 1;
      left = right + 1;
      right = left;
      ropeLength = 0;
    } else {
      right += 1;
    }
  }

  return ropes;
}
