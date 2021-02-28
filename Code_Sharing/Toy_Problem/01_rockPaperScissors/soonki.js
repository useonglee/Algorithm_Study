const rockPaperScissors = function (rounds) {
  // TODO: 여기에 코드를 작성합니다.

  // rounds가 3, num은 총 경우의 수로 3의 rounds제곱 = 27이된다.
  //num만큼 반복하고, 안에 이중포문으로 rounds만큼 반복해서(여기선3) 각 경우의 배열을 넣는다

  //list = ['rock', 'paper', 'scissors']

  //예를들어 25번째 경우의 값은 s s p이다.
  //1. 25%3 = 1 이므로 p를 unshift
  //2. 25/3 = 8.xx = 8
  //2.1 8%3 = 2 이므로 s를 unshift
  //3. 8/3 = 2.xx = 2
  //3.1 2%3 = 2 이므로 s를 unshift

  rounds = rounds || 3;
  let num = Math.pow(3, rounds);
  let list = ['rock', 'paper', 'scissors'];
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr[i] = [];
    let numInput = i;

    for (let j = 0; j < rounds; j++) {
      arr[i].unshift(list[numInput % 3]);
      numInput = Math.floor(numInput / 3);
    }
  }
  return arr;
};
