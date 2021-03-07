const bubbleSort = function (arr) {
  let present = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        present = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = present;
        count++;
      }
    }
    if (count === 0) {
      break;
    }
  }
  return arr;
};
