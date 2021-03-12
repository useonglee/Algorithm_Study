function barcode(len) {

  const dfs = (str) => {
    if (str.length === len) {
      return str;
    }
    for (let i = 1; i <= 3; i++) {
      if (isok(str + i)) {
        const x = dfs(str + i);
        if (x) {
          return x;
        }
      }
    }
    return 0
  }
  return dfs("121");
}

// 체크 함수
function isok(str) {
  let reversed = str.split("").reverse().join("");

  for (let [i, len] = [1, parseInt(str.length/2)]; i <= len; i++) {
    if (reversed.slice(0, i) === reversed.slice(i, i+i)) {
      return false;
    }
  }
  return true;
}
