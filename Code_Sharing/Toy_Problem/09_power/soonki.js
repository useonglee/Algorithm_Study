function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  // 3을 40번 곱한다?
  // 3 * 3 = 9 를 20번 곱한다
  // 9*9( 3^4)를 10번 곱한다.
  // 3^8 5번
  // -- 5가 홀수네? -- 3^16 2번 * 3^8
  // 3^32 1번 -------------------요놈
  // 끝
  let divider = 94906249;
  if (exponent === 0) return 1;
  if (exponent === 1) return base % divider;

  if (exponent % 2 === 0) return power((base * base) % divider, exponent / 2);
  else return (power((base * base) % divider, Math.floor(exponent / 2)) * base) % divider;
}
