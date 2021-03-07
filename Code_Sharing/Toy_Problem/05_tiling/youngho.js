let tiling = function (n) {
    let temp = [1,2];
    for(let i = 2; i < n; i++){
      temp[i] = temp[i-1]+temp[i-2];
    }
  
    return temp[n-1];
  };
  //1 2 3 5 8 13 