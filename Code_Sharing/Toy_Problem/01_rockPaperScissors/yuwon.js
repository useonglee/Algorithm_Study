const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  let rps = ["rock", "paper", "scissors"];
  let result = [];

  const newRps = function (round, carrier) {
    // 재귀
    if (round === 0) {
      // 기존에 round가 0이 되는 순간 result에 carrier를 push해서 리턴
      return result.push(carrier);
    }
    for (let i = 0; i < rps.length; i++) {
      // rps.length 까지 반복
      newRps(round - 1, carrier.concat(rps[i])); // round를 계속해서 1씩 빼고, carrier에 concat해서 rps[i]값을 합쳐준다.
    }
  };
  newRps(rounds, []); // newRps는 rounds와 배열을 parameter로 한다

  return result; // result를 리턴해서 함수에서 결과를 확인한다.
};
