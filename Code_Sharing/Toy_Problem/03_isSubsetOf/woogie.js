const isSubsetOf = function (base, sample) {
  let answer = false;
  const baseSet = new Set(base);

  for (let i = 0; i < sample.length; i++) {
    answer = baseSet.has(sample[i]) ? true : false;
  }

  return answer;
};
