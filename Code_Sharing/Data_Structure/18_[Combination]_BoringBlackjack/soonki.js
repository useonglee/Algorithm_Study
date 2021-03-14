
function boringBlackjack(cards) {
  //소수인지 확인하는 함수
  const checkPrime = (number) => {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  };

  let count = 0;
  // 모든 조합의 수
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        //sum이 소수면 count++
        if (checkPrime(sum)) count += 1;
      }
    }
  }

  return count;
}
