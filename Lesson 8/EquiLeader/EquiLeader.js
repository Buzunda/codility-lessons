// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const { leader, leaderCount } = getLeader(A);

  if (leader === undefined) {
    return 0;
  }

  let countEquiLeaders = 0;
  let currentLeaderCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      currentLeaderCount++;
    }
    if (i < A.length - 1) {
      if (
        currentLeaderCount > (i + 1) / 2 &&
        leaderCount - currentLeaderCount > (A.length - i - 1) / 2
      ) {
        countEquiLeaders++;
      }
    }
  }

  return countEquiLeaders;
}

function getLeader(A) {
  const stack = [];

  for (let i = 0; i < A.length; i++) {
    const currentElement = A[i];

    stack.push(currentElement);

    const lastStackElement = stack[stack.length - 1];
    const penultimateStackElement = stack[stack.length - 2];

    if (
      penultimateStackElement !== undefined &&
      lastStackElement !== penultimateStackElement
    ) {
      stack.pop();
      stack.pop();
    }
  }
  const possibleLeader = stack.pop();

  let leaderCount = 0;

  for (let i = 0; i < A.length; i++) {
    const currentElement = A[i];

    if (possibleLeader === currentElement) {
      leaderCount++;
    }
  }
  if (leaderCount > A.length / 2) {
    return { leader: possibleLeader, leaderCount };
  }
  return {};
}
