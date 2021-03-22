const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.

  //'abc'다?
  //0. 솔트하고 목록은 ['',a,b,c]로 시작한다.
  //1. 재귀의 시작은 ''를 넣는다.
  //2.1 ''를 입력한 인자에 for문을 돌면서 a,b,c를 더한 값을 재귀돌린다.
  //2.2 a 넣었으면 b부터 재귀가 시작해야한다. => ???
  //2.3 result에 푸쉬는 for문 밖? 안?
  //3.반복문 종료되면 끝

  let char = str.split('');
  let set = new Set(char);
  char = ['', ...set].sort();

  let result = [];

  let recur = (idx, temp) => {
    result.push(temp);

    for (let i = idx + 1; i < char.length; i++) {
      recur(i, temp + char[i]);
    }
  };

  recur(0, char[0]);

  return result;
};
