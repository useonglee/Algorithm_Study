const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;

    for (let idx = 1; idx < arr.length; idx++) {
      if (arr[idx - 1] > arr[idx]) {
        let temp = arr[idx];
        arr[idx] = arr[idx - 1];
        arr[idx - 1] = temp;
        isSorted = false;
      }
    }

    if (isSorted) return arr;
  }
  return arr;
};
