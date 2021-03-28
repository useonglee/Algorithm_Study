const insertionSort = (arr, result = (el) => el) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = 0;
    let isSwap = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      swap = arr[j];

      if (result(arr[j + 1]) < result(arr[j])) {
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        isSwap = false;
      }
    }

    if (isSwap) {
      break;
    }
  }
  return arr;
};
