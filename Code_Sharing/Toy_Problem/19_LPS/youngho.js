const LPS = function (str) {
  let max = 0;
  for(let i = str.length; i >= str.length/2; i--){
    if(str[0]===str[i]){
      if(str.slice(0,str.length-i)===str.slice(i,str.length)){
        max = str.length-i
      }
    }
  }
  return max
};


// const LPS = function (str) {
//   // lps[i]는 0부터 i까지의 부분 문자열, 즉 str.slice(0, i + 1)에서 lps의 길이를 저장한다.
//   const lps = Array(str.length);
//   // lps[0]은 길이가 1인 문자열의 lps의 길이이므로 항상 0이다. (자기 자신 포함 금지)
//   lps[0] = 0;
//   let leftIdx = 0;
//   let rightIdx = 1;
//   // lps[i]를 1부터, 즉 문자열의 길이가 2일때부터 차례대로 구한다.
//   while (rightIdx < str.length) {
//     if (str[leftIdx] === str[rightIdx]) {
//       // 가장 단순한 경우를 생각해보면, 쉽게 이해할 수 있다.
//       // 1) 길이가 2 경우
//       // 2) 길이가 3 이상인데 전부 같은 문자인 경우
//       // 0부터 leftIdx까지 매칭이 되었으므로 매칭된 길이는 leftIdx + 1이다.
//       leftIdx++;
//       lps[rightIdx] = leftIdx;
//       rightIdx++;
//     } else {
//       // 중간에 매칭이 되지 않은 경우, leftIdx를 조정한다.
//       // 현재 lps[0]부터 lps[rightIdx - 1]까지 계산이 완료된 상태이다.
//       // 처음부터 다시 prefix, suffix 매칭을 하는 것이 원칙이지만
//       // 앞서 계산한 결과인 lps 배열을 통해 처음으로 되돌아갈 필요는 없다.

//       // 예. aaabaaaa
//       // 현재 leftIdx는 2, rigthIdx는 3, lps는 [0, 1, 2]인 상태라고 가정해보자.
//       // leftIdx가 1일 때까지, 즉 현재 leftIdx 직전(leftIdx - 1)까지는 매칭이 되었다.
//       if (leftIdx !== 0) {
//         leftIdx = lps[leftIdx - 1];
//         // Also, note that we do
//         // not increment i here
//       } else {
//         // rightIdx가 1인 경우, 즉 첫 iteration일 경우
//         // lps[rightIdx]가 0인 것은 명백하다. (예. ab)
//         // leftIdx가 0이라는 것은 처음부터 prefix, suffix 매칭을 하는 경우이다.
//         //
//         // lps가 존재하지 않는 경우이다.
//         lps[rightIdx] = 0;
//         rightIdx++;
//       }
//     }
//   }
//   const res = lps[lps.length - 1];
//   return res > str.length / 2 ? Math.floor(str.length / 2) : res;
// };
