function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  let fnArr = [0, 1];

  let fn = (n) => {
    
    if (typeof fnArr[n] !== "number") {
      fnArr[n] = fn(n-2) + fn(n-1);
    }
    return fnArr[n]
  }
  return fn(n)
}

