let tiling = function (n) {
  // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
  // 피보나치군..
  const memo = [0, 1, 2];
  const aux = (n) => {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = aux(n - 1) + aux(n - 2);
    // console.log(memo);
    return memo[n];
  };
  return aux(n);
};
