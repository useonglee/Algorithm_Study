const insertionSort = function (arr, callback = (value) => value) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;

    arr.forEach((el, idx, arr) => {
      if (callback(arr[idx]) > callback(arr[idx + 1])) {
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        isSorted = false;
      }
    });

    if (isSorted) return arr;
  }
  return arr;
};
