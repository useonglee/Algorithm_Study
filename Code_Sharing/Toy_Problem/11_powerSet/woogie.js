const powerSet = function (str) {
  const sorted = Array.from(new Set(str)).sort()
  const answer = []

  const dfs = (start, str) => {
    answer.push(str);

    if(str.length === sorted.length) return

    for (let i = start; i < sorted.length; i++) {
      console.log(`${sorted[i]} - ${str}`)
      dfs(i + 1, `${str}${sorted[i]}`);
    }
  };

   dfs(0, '');

   return answer
};
