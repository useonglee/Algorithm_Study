function divideChocolateStick(A, N) {
  let primeArr = [];
  let smallNum = A;
  let arr = [];
  let result = [];

  // 입력 받은 수 중 작은 수 찾기
  if (A > N) {
    smallNum = N;
  }

  // 최대공약수 찾기
  let GCD = 0;
  for (let i = smallNum; i > 0; i--) {
    if (A % i === 0 && N % i === 0) {
      GCD = i;
      break;
    }
  }

  // 최대공약수를 루트한 값까지만 for문 돌리기
  let rootGCD = Math.floor(Math.sqrt(GCD));
  for (let j = 1; j <= rootGCD; j++) {
    if (A % j === 0 && N % j === 0) {
      primeArr.push(j);
      if (j !== GCD / j) {
        primeArr.push(GCD / j);
      }
    }
  }

  // 마지막으로, 정답처럼 배열 만들어주기
  for (let k = 0; k < primeArr.length; k++) {
    arr = [primeArr[k], A / primeArr[k], N / primeArr[k]];
    result.push(arr);
  }
  return result;
}
