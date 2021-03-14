
function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  type.sort((a, b) => a - b);
  //[10,20,50]일때, 50은 10*5 / 10*1+20*2 / 10*3+20*1 / 50*1 총 4가지
  //30을만드는건 10원 3개 10원1개 20원1개
  let list = Array(target + 1).fill(0); // 0~target만큼의 요소를갖는 배열
  list[0] = 1; //동전 자신만 쓰는경우를 0에 할당한다.
  for (let i = 0; i < type.length; i++) {
    for (let j = type[i]; j < target + 1; j++) {
      list[j] = list[j] + list[j - type[i]]; //동전의 배수마다 1을 더한다.
    }
  }

  return list[target];
}
