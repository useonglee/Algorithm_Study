const isSubsetOf = function (base, sample) {
    let temp = [];
    for(let i = 0; i < 10; i++){
      temp.push([]);
    }
  
    base.forEach(el=>{//배열 돌면서 끝자리 idx별로 이차원배열에 할당
      temp[el%10].push(el); 
    })
  
    for(let i = 0, len = sample.length; i < len; i++){
      let el = sample[i]
      if(temp[el%10].indexOf(el) === -1) {return false}
  
    }
    return true
  };
  
  
  // const isSubsetOf = function (base, sample) {
  //   let a = [...new Set(base.concat(sample))];
  //   if(a.length===base.length) return true;  
  //   return false;
  // };
  