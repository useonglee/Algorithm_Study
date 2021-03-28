const powerSet = function (str) {
  // 알파벳 모음 Array
  let alphabet = [...new Set(str.split(""))];
  alphabet = alphabet.sort();

  let subSets = [];
  const dfs = (idx, subset) => {
    // base case
    if (idx === alphabet.length) {
      subSets.push(subset);
      return;
    }

    // recursive case
    dfs(idx + 1, subset);
    dfs(idx + 1, subset + alphabet[idx]);
  };

  dfs(0, "");

  return subSets.sort();
};
