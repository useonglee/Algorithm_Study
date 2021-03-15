let tiling = function (n) {
    let temp = [1,2];
    for(let i = 2; i < n; i++){
      temp[i] = temp[i-1]+temp[i-2];
    }
  
    return temp[n-1];
  };
  //1 2 3 5 8 13 

const tiling = function (n){

  const factorial = [1];
  for(let i = 1; i <= n; i++){
    factorial[i] = factorial[i-1]*i
  }

  let k = 0;
  let result = 0;
  
  while(k <= parseInt(n/2)){
    console.log(result)
    result+=factorial[n-k]/(factorial[n-2*k])/factorial[k]
    k++
  }
  return result;
}
