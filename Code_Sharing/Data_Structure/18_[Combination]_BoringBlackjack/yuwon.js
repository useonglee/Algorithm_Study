const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); 
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두 다 push
    });
  
    return results; // 결과 담긴 results return
  }
  
  function isPrime(n) {
      if (n % 2 === 0) {    // 2로 나눴을 때 나머지가 0일 경우엔 소수가 아닙니다. 이 말인 즉슨 짝수는 다 소수가 아닙니다.
      return false
    };
  
      let divisor = 3;             // 최대 n - 1까지 돌려줍니다
      while (n > divisor) {        // 무엇이라도 0으로 떨어진다면 소수가 아닙니다
          if (n % divisor === 0) {
        return false
      };
          divisor += 2;             // 짝수일 경우를 제외한 홀수일 경우를 판단
      }
      return true;                // 모든 조건을 통과했을 경우 소수
  }
  
  function boringBlackjack(cards) {
    let findPrime = getCombinations(cards, 3)
    let realFindPrime = [];
    let count = 0;
    for(let i = 0; i < findPrime.length; i++) {
      let sum = findPrime[i].reduce((a,b) => a + b);
      realFindPrime.push(sum)
    }
    for(let j = 0; j < realFindPrime.length; j++) {
      if(isPrime(realFindPrime[j])) { 
        count++
      } 
    }
    return count;
  }