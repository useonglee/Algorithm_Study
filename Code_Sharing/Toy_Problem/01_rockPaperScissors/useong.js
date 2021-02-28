const rockPaperScissors = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  
  n = n || 3

  let result = [];
  let rps = ['rock', 'paper', 'scissors'];

  for (let i = 0; i < 3**n; i++) {
    let temp = [];
    let k = i

    for (let j = 0; j < n; j++) {
      temp.unshift(rps[k%3]);
      k = parseInt(k/3);

    }
    result.push(temp);
  }
  
  return result;
}
