
function orderOfPresentation(n, k) {
  // TODO: 여기에 코드를 작성합니다.
  //1. 경우의수배열을 만들어서 모든경우의수 배열에 넣어준다.
  //2.1 맨앞 요소를 박고, 나머지는 재귀돌려서 경우의수배열에 넣어준다.
  //2.2 끝까지 다 넣으면 모든경우의수배열에 push한다.
  //2.3 위를 재귀로 반복
  let group = [];
  for (let i = 1; i <= n; i++) {
    group.push(i);
  }

  let listAll = [];
  let list;

  const recur = (arr, list = []) => {
    if (arr.length === 0) {
      listAll.push(list);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let newArr = arr.slice();
        let cur = newArr.splice(i, 1);
        let temp = newArr.slice();
        recur(temp, list.concat(cur));
      }
    }
  };

  recur(group);

  if (typeof k === 'number') {
    return listAll[k];
  } else {
    for (let i = 0; i < listAll.length; i++) {
      if (`${k}` === `${listAll[i]}`) return i;
    }
  }
}
