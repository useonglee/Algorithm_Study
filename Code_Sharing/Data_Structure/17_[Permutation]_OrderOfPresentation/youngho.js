function orderOfPresentation(n, k) {
  const order = [];
  for(let i = 1; i <= n; i++){
    order.push(i);
  }
  let factorial = [1];
  for(let i = 1; i <=n; i++){
    factorial[i] = factorial[i-1]*i
  }

  console.log(JSON.stringify([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]))
  console.log('order: '+JSON.stringify(order))
  console.log('factorial: '+JSON.stringify(factorial))

  if (Array.isArray(k) === true){//k가 배열일때
    let result = 0;
    while(n>0){
      let partialOrder = order.indexOf(k.shift())
      result += factorial[n-1]*(partialOrder);
      order.splice(partialOrder,1)
      n--;
      // console.log(n+'partialOrder: '+partialOrder)
    }
    return result;
  }
  else{//k가 숫자일때
    let result = [];
    while(n>0){
      let partialResult = parseInt(k/factorial[n-1]);
      result.push(order[partialResult]);
      order.splice(partialResult,1);
      k-=(partialResult)*factorial[n-1];
      n--;
      // console.log('partialResult: '+partialResult)
    }
    return result
  }
}