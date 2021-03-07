const isSubsetOf = function (base, sample) {
  let result = true;
  for (let i = 0; i < sample.length; i++) {
    if (!base.includes(sample[i])) {
      result = false;
    }
  }
  return result;
};
