const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  function convertToAbs(num) {
    return Math.abs(num);
  }

  arr.sort((a, b) => {
    if (convertToAbs(a) < convertToAbs(b)) return 1;
    else if (convertToAbs(a) > convertToAbs(b)) return -1;
    else return 0;
  });

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let result = arr[i] * arr[j] * arr[k];
        if (i === arr.length - 3 && j === arr.length - 2 && k === arr.length - 1) return result;
        if (result < 0) continue;
        return result;
      }
    }
  }
};
