const largestProductOfThree = function (arr) {
  let result = [];
  let maybeMax = 1;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        maybeMax = arr[i] * arr[j] * arr[k];
        result.push(maybeMax);
      }
    }
  }

  if (result.length === 1) {
    return result[0];
  } else {
    let max = result[0];
    for (let x = 1; x < result.length; x++) {
      if (result[x] > max) {
        max = result[x];
      }
    }
    return max;
  }
};
