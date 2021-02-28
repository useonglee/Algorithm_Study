const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  let result = [];
  let rps = ["rock", "paper", "scissors"];

  let rpsGame = function (num, head) {
    if (num === 0) {
      result.push(head);
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      const tail = rps[i];
      rpsGame(num - 1, head.concat(tail));
    }
  };

  rpsGame(rounds, []);
  return result;
};
//
