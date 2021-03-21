function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  let mid = parseInt(exponent / 2);
  let midPower = power(base, mid);
  let result = (midPower * midPower) % 94906249;

  if (exponent % 2) {
    return (result * base) % 94906249;
  } else {
    return result;
  }
}
