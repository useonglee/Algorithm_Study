function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  
  let result = 1

  while(exponent) {
    if (exponent % 2) {
      result = result * base % 94906249; 
    }

    base = base * base % 94906249;
    exponent = parseInt(exponent/2)
  }
  return result;
}

  

