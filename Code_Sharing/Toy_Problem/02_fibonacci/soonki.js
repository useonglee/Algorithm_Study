function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [0, 1];

  function inputEl(num) {
    num = arr.length;

    if (num - 1 === n) return;
    else {
      arr[num] = arr[num - 1] + arr[num - 2];
      return inputEl();
    }
  }

  if (n <= 2) {
    return arr[n];
  }
  inputEl();
  return arr[arr.length - 1];
}
