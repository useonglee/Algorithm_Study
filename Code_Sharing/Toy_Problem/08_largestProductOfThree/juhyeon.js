const largestProductOfThree = function (arr) {
  // 숫자 3개 선택 => 조합
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        result.push(arr[i] * arr[j] * arr[k]);
      }
    }
  }

  return Math.max(...result);
};
