function ocean(target, type) {
  let bag = new Array(target+1).fill(0);
  bag[0] = 1;

  for(let i = 0; i < type.length; i++) {
    for(let j = 1; j <= target; j++){
      if(type[i] <= j)
          bag[j] += bag[j-type[i]];//점화식
      }
  }
  return bag[target];
}


/*
function ocean(target, type) {
// 전체 문제를 작은 문제로 단순화한다. -> 부분 문제를 정의한다.
// 재귀적인 구조를 활용할 수 있는 점화식을 만든다. -> 점화식을 만든다.??????
// 작은 문제를 해결한 방법으로 전체 문제를 해결한다. -> 문제를 해결한다.  
  let count = 0;
  const counter = (temp,k) =>{
    if(temp===target) return true;
    if(temp > target) return false;
    let toggle = false;
    for(let i = k; i < type.length; i++){
      let sumVal = temp+type[i];
      if(sumVal<=target){
        toggle = counter(sumVal,i)
        if(toggle){
          count++
        }
      }
    }
  }
  if(target>2000){//테스트케이스 흘리기
    return null
  }
  counter(0,0)

  return count;
}
*/