function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  sideDishes.sort();
  let n = sideDishes.length;
  let result = [];
  const innerFn = function(arr,idx,n){
    if(n === 0){//계속 안들어갈 수 있기 때문에 n을 추가함.
      result.push(arr);
      return;
    }
    innerFn(arr.slice(), idx+1,n-1);//idx번째 음식이 안들어가는 경우
    let contains = arr.slice();
    contains.push(sideDishes[idx]);
    innerFn(contains.slice(), idx+1, n-1);//idx번째 음식이 들어가는 경우

  }
  innerFn([],0,n);
  return result.sort();//페어분이 찾아주심
}

/*
const a = 
[
  [],
  [ 'kimchi' ],
  [ 'fishSoup' ],
  [ 'fishSoup', 'kimchi' ],
  [ 'eggroll' ],
  [ 'eggroll', 'kimchi' ],
  [ 'eggroll', 'fishSoup' ],
  [ 'eggroll', 'fishSoup', 'kimchi' ]
];

a.sort()

console.log(a)
[
  [],
  ['eggroll'],
  ['eggroll', 'fishSoup'],
  ['eggroll', 'fishSoup', 'kimchi'],
  ['eggroll', 'kimchi'],
  ['fishSoup'],
  ['fishSoup', 'kimchi'],
  ['kimchi'],
];
*/