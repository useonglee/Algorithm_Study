function divideChocolateStick(A, N) {
  /*
  2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), 
  a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 
  다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다. 
   */
  // 최대공약수 구하기
  function gComDivSolve(n,m){
    if(n<m){return gComDivSolve(m,n)}
    let rest = n%m
    if(rest === 0){
      return m;
    }
    return gComDivSolve(m,rest)
  }    
  let gComDiv = gComDivSolve(A,N);    
  console.log(`최대공약수: ${gComDiv}`)
  // 최대 공약수의 약수구하기 - 왼쪽부분 : 4인 경우 [1,2]
  let temp = [];
  for(let i = 1; i <= Math.sqrt(gComDiv); i++){
    if(gComDiv % i === 0){
      temp.push(i);
    }
  }
  console.log(`약수 왼쪽: ${JSON.stringify(temp)}`)
  // 전체 최대공약수 구하기 [1,2,4]
  let len = temp.length;
  for(let i = 0; i < len; i++){
    let divised = gComDiv/temp[i];
    if( divised !== temp[i] ){ //제곱인 경우 중복이 생기므로 제외
      temp.push(divised);
    }
  }
  
  console.log(`약수 전체: ${JSON.stringify(temp)}`)
  //[최대 공약수의 약수,A/약수, N/약수]
  //[1,2,4]
  return temp.map(el=>{
    return [el,A/el,N/el]
  })
}