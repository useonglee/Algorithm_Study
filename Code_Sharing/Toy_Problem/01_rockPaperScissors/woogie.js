const rockPaperScissors = function (n) {
  n = n || 3;
  let arr = ["rock", "paper", "scissors"];

  function permutation(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr;
      const permutationArr = permutation(restArr, selectNum - 1);
      const combineFix = permutationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }

  return permutation(arr, n);
};
