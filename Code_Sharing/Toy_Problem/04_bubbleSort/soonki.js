const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;

    arr.forEach((el, idx, arr) => {
      if (idx === 0) return;

      if (arr[idx - 1] > el) {
        let temp = el;
        arr[idx] = arr[idx - 1];
        arr[idx - 1] = temp;
        isSorted = false;
      }
    });

    if (isSorted) return arr;
  }
  return arr;
};
