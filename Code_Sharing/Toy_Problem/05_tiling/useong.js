let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let a = 1, b = 2;
  
  for (let i = 0; i < n-2; i++) {
    [a, b] = [b, (a+b)];
  }
  return n === 1 ? 1 : b
};
