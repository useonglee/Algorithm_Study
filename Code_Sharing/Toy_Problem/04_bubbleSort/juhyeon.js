const bubbleSort = function (arr) {
  let newArr = arr.slice();
  for (let j = 0; j < arr.length; j++) {
    if (j === 1 && newArr === arr) {
      break;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let copy = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = copy;
      }
    }
  }
  return arr;
};
