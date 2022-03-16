function solution(A) {
  let N = A.length;

  if (N < 4) {
    return 0;
  }

  let maxEnding = [];
  let maxStarting = [];

  maxEnding[0] = 0;
  maxEnding[N - 1] = 0;
  maxStarting[0] = 0;
  maxStarting[N - 1] = 0;

  for (let i = 1; i < N - 1; i++) {
    maxEnding[i] = Math.max(0, maxEnding[i - 1] + A[i]);
    maxStarting[N - 1 - i] = Math.max(0, maxStarting[N - i] + A[N - 1 - i]);
  }

  let max = 0;

  for (let i = 1; i < N - 1; i++) {
    max = Math.max(max, maxEnding[i - 1] + maxStarting[i + 1]);
  }

  return max;
}
