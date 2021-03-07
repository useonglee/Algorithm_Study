const isSubsetOf = function (base, sample) {
  let answer = false;
  const baseSet = new Set(base);

  for (let i = 0; i < sample.length; i++) {
    if (baseSet.has(sample[i])) answer = true;
    else answer = false;
  }

  return answer;
};
