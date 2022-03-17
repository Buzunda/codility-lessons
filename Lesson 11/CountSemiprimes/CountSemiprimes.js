// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, P, Q) {
  let primeSieve = [false, false];
  for (let i = 2; i < N + 1; i++) {
    primeSieve[i] = true;
  }

  for (i = 2; i * i <= N; i++) {
    if (primeSieve[i]) {
      let k = i * i;
      while (k <= N) {
        primeSieve[k] = false;
        k += i;
      }
    }
  }

  let primes = [];

  for (i = 0; i <= N; i++) {
    if (primeSieve[i]) {
      primes.push(i);
    }
  }

  if (primes.length === 0) {
    let result = [];
    for (let i = 0; i < P.length; i++) {
      result[i] = 0;
    }
    return result;
  }

  let semiPrimes = {};

  for (i = 0; i < primes.length; i++) {
    if (primes[i] * primes[i] <= N) {
      semiPrimes[primes[i] * primes[i]] = true;
    } else {
      break;
    }
    for (let j = i + 1; j < primes.length; j++) {
      if (primes[i] * primes[j] <= N) {
        semiPrimes[primes[i] * primes[j]] = true;
      } else {
        break;
      }
    }
  }

  let countSemiPrimes = [0];

  for (i = 1; i <= N; i++) {
    if (semiPrimes[i]) {
      countSemiPrimes[i] = countSemiPrimes[i - 1] + 1;
    } else {
      countSemiPrimes[i] = countSemiPrimes[i - 1];
    }
  }

  let result = [];
  for (i = 0; i < P.length; i++) {
    result.push(countSemiPrimes[Q[i]] - countSemiPrimes[P[i] - 1]);
  }

  return result;
}
