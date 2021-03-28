const primePassword = (curPwd, newPwd) => {
  /**
   * 
   * 미완
   */
  const deciArr = Array(newPwd+1).fill(true);
  deciArr[0] = false;
  deciArr[1] = false;
  //
  for(let i = 2; i <= newPwd; i++){
    let isDeci = true
    if(deciArr[i]){
      for(let j = 2; j <= Math.sqrt(i);j++){
      if(i === 2 || i === 3) break;
          if(i % j === 0){
          isDeci = false;
          break;
        }
      }
      if(isDeci){
        for(let k = 2*i; k <= newPwd; k += i){
          deciArr[k] = false;
        }
      }
    }
  }
//     debugger;
  // bt : curPwd의 큰 자리수부터 newPwd숫자기준 1씩 줄여가며 소수인지 확인하고 없으면 그 다음자리수로 들어가서 반복,
  // 소수이면 해당숫자를 왼쪽인자로
  let result = 0;
  const bt = (left, right) => {
    if(left === right) return true;
    for(let i = 3; i >= 0; i--){ // left 와 right사이 left와 한자리수만 차이나고 최대값인 것을 찾아라
      const rNum = parseInt(right/10**i)%10
      const lNum = parseInt(left/10**i)%10
      for(let j = 9; j > 0; j--){//
        let tempLeft = left - (lNum - j)*10**i
        if(tempLeft>right || tempLeft <= left ) continue;
        if(deciArr[tempLeft]){
console.log(tempLeft)
          result++;
          if(bt(tempLeft ,right)){
            return true
          }
          result--
        }
      }
    }
    return false;
  }
  bt(curPwd, newPwd)
  return result;
};