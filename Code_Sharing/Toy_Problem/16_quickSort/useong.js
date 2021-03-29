const quickSort = function (arr, callback = value => value) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let [left, right] = [[], []];

  for (let i = 1; i < arr.length; i++) {
    if (callback(arr[i]) < callback(pivot)) {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }
  const leftArr = quickSort(left, callback);
  const rightArr = quickSort(right, callback);

  return [...leftArr, pivot, ...rightArr];
}

