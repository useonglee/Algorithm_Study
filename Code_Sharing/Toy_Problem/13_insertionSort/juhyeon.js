const insertionSort = function (arr, callback = (item) => item) {
  let isSorted = true;

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (callback(arr[i]) > callback(arr[i + 1])) {
        let copy = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = copy;
        isSorted = false;
      }
    }

    if (isSorted === true) {
      break;
    }
  }

  return arr;
};
