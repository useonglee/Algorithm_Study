function power(base, exponent) {
  // exponent를 이진수로 바꿔주기
  const binaryNum = exponent.toString(2);

  let result = 1;
  for (let i = 0; i < binaryNum.length; i++) {
    result = (result * result) % 94906249;
    if (binaryNum[i] === "1") {
      result = (result * base) % 94906249;
    }
  }
  return result;
}
