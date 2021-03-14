function orderOfPresentation(n, k) {
  let result = [];
  let numberArr = [];

  // 숫자 배열 만들기
  function createNumberArr(n) {
    for (let i = 1; i <= n; i++) {
      numberArr.push(i);
    }
    return numberArr;
  }

  // 재귀로 모든 경우의 수가 담긴 배열 만들기
  function createAllArr(n, head) {
    if (n === 0) {
      return result.push(head);
    }
    for (let i = 0; i < numberArr.length; i++) {
      if (!head.includes(numberArr[i])) {
        const tail = numberArr[i];
        createAllArr(n - 1, head.concat(tail));
      }
    }
  }

  // 함수 실행
  createNumberArr(n);
  createAllArr(n, []);

  // 마지막으로 답 찾기
  if (typeof k === "number") {
    return result[k];
  } else {
    return result.findIndex((e) => String(e) === String(k));
  }
}
