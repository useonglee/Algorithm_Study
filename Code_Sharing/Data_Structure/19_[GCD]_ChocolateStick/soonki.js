
function divideChocolateStick(A, N) {
  // TODO: 여기에 코드를 작성합니다.

  function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b);
  }

  let cd = gcd(A, N);
  let sqrt = Math.sqrt(cd); //최대공약수의 제곱근
  let result = [];
  let pairCd;

  for (let i = 1; i <= sqrt; i++) {
    if (cd % i === 0) {
      //i는 cd의 약수들이어야한다.
      result.push([i, A / i, N / i]);

      if (i !== sqrt) {
        //제곱근이면 짝약수 없으므로 제외.
        pairCd = cd / i; //짝 약수도 넣어줘야지
        result.push([pairCd, A / pairCd, N / pairCd]);
      }
    }
  }
  return result;
}

// 6 9
// 최대공약수는 3
// [people = 최대공약수 3의 약수들이 들어감, A/people, N/people]
// A의 제곱근 = Math.sqrt(A)
