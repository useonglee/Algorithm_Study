const quickSort = function (arr, callback = (value) => value) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return [];
  let middle = arr[0],
    left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    if (callback(middle) > callback(arr[i])) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(middle, quickSort(right));
};
