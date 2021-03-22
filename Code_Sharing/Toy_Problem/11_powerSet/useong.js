const powerSet = function (str) {

  let arr = [...new Set(str.split("").sort())];
  let check = new Array(arr.length).fill(0);
  let result = [];

  const dfs = (depth) => {  
    if (depth === arr.length) {
      result.push(arr.filter((el, idx) => check[idx]).join(""))
    }
    else {
      check[depth] = 1;
      dfs(depth + 1);

      check[depth] = 0;
      dfs(depth + 1);
    }
 }
  dfs(0);
  return result.sort();
}

/*
내가 있거나, 내가 없는 경우를 구한다.
첫 번째 원소의 개수가 하나도 없는 공집합: {''}
다 있는 경우: a,b,c => [1,1,1]
c가 없는 경우: a, b => [1,1,0]

b가 없는 경우: a, c => [1,0,1]
b,c가 없는 경우: a => [1,0,0]

a,c가 없는 경우: b => [0,1,0]
a가 없는 경우: b,c => [0,1,1]
a,b가 없는 경우: c => [0,0,1]
*/

