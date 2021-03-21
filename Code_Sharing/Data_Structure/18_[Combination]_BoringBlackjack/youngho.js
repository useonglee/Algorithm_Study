function boringBlackjack(cards) {
  let count = 0;
  // 3장뽑기 
  for (let i = 0; i <= cards.length -3; i++){
    for (let j = i + 1; j <= cards.length -2 ; j++){
      for (let k = j + 1; k <= cards.length -1; k++){
        const cardnumber = cards[i] + cards[j] + cards[k]
          black(cardnumber);
      }
    }
  }
    // 1. 카드가 주어지면 3개를 골라 3개를 합친다. 
    // 2. 그 합에 대한 판별을 한다. 
  function black(cardnumber) {
    let toggle = true //for문돌때마다 초기화해줘야지
    for (let i = 2; i <= Math.sqrt(cardnumber); i++) {
      if (cardnumber % i === 0) {
          toggle = false;
          break;
      }
    }
    if (toggle === true){
      count++
    }
  }
  // 2-1 소수면 count++
  // 2-2 소수가 아니면 
  return count;
}