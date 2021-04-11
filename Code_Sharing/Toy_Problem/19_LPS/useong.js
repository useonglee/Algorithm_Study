const LPS = function (str) {
  let answer = '';
  
  for (let i = 1,len = parseInt(str.length/2); i <= len; i++) {
    let pre = str.slice(0, i);
    let suf = str.slice(-i);

    if (pre === suf) {
      answer = pre;
    }
  }
  return answer.length;
};
