const primePassword = (curPwd, newPwd) => {
  const deciArr = Array(10001).fill(true);
  deciArr[0] = false;
  deciArr[1] = false;
  //
  for (let i = 2; i <= 10001; i++) {
    let isDeci = true;
    if (deciArr[i]) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i === 2 || i === 3) break;
        if (i % j === 0) {
          isDeci = false;
          break;
        }
      }
      if (isDeci) {
        for (let k = 2 * i; k <= 10001; k += i) {
          deciArr[k] = false;
        }
      }
    }
  }

  let q = [[curPwd, 0]];
  while (q.length > 0) {
    const [pwd, num] = q.shift();
    if (pwd === newPwd) return num;
    for (let i = 3; i >= 0; i--) {
      // 한자리만 바꿨을 때 소수인 것들을 찾아라
      const digit = parseInt(pwd / 10 ** i) % 10;
      for (let j = 9; j!==digit,j >= 0; j--) {
        //
        let tempLeft = pwd - (digit - j) * 10 ** i;
        if (tempLeft < 1000) continue;
        if (deciArr[tempLeft]) {
          q.push([tempLeft, num + 1]);
          console.log(pwd,tempLeft,digit)
          deciArr[tempLeft] = false;
        }
      }
    }
  }

  return -1;
};