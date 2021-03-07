const bubbleSort = function (arr) {
  let idx = 1;
  let toggle = false;

  for (let i = 0; i < arr.length; i++) {
    while (idx < arr.length) {
      if (arr[idx - 1] > arr[idx]) {
        let [f, b] = [arr[idx - 1], arr[idx]];
        arr[idx - 1] = b;
        arr[idx] = f;
        toggle = true;
      }
      idx++;
    }
    if (!toggle) return arr;
    idx = 1;
  }

  return arr;
};
