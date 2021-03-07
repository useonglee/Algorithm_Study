const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let tempArr = [...new Set(str.split('').sort())];
    let len = tempArr.length;
    let result = [];
    const innerFn = (idx,subset)=>{
      if(idx === len){
        result.push(subset);
        return;
      }
      innerFn(idx+1,subset+tempArr[idx]);
      innerFn(idx+1,subset)
    }
    innerFn(0,'')
    return result.sort();
  };