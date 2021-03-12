function barcode(len) {
  let target = [];

  // 바코드 길이만큼 모든 경우를 다 만들어주는 함수
  function createBarcode(len) {
    let answer = "";
    const aux = (str) => {
      if (str.length === len) {
        target.push(str);
        return;
      }
      aux(str + "1");
      aux(str + "2");
      aux(str + "3");
    };
    aux("");
    return target;
  }

  // 타당성 검사 함수
  function isValid(str) {
    for (let len = 1; len <= Math.floor(str.length / 2); len++) {
      for (let src = 0; src <= str.length - len * 2; src++) {
        const left = str.slice(src, src + len);
        const right = str.slice(src + len, src + len + len);
        if (left === right) {
          return false;
        }
      }
    }
    return true;
  }

  createBarcode(len);

  for (let i = 0; i < target.length; i++) {
    if (isValid(target[i]) === true) {
      return target[i];
    }
  }
}
