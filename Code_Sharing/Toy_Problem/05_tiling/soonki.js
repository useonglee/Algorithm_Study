let tiling = function (n) {
  let arr = [0, 1, 2];

  if (n <= 2) return n;

  function inputEl() {
    let len = arr.length;

    if (len - 1 === n) return;
    else {
      arr[len] = arr[len - 1] + arr[len - 2];
      return inputEl();
    }
  }

  inputEl();
  return arr[n];
};
