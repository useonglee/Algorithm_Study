function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    let prev = 0;
    let prevprev = 1;
  
    function fibo(n,temp){
      if(n===0) return prev;
      prev = prevprev;
      prevprev = temp+prevprev;
      return fibo(n-1,prev);
    }  
    return fibo(n,0)
  }
