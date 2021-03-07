function fibonacci(n) {
  let arr = [0, 1];
  let newFibo = function (n) {
    if (arr[n] !== undefined) {
      return arr[n];
    } else {
      arr[n] = newFibo(n - 2) + newFibo(n - 1);
      return arr[n];
    }
  };
  return newFibo(n);
}
