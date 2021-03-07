function fibonacci(n, fib = [0, 1]) {
  if (n === 0) return 0;

  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  fibonacci(n - 1, fib);

  return fib[n];
}
