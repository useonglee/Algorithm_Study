const isSubsetOf = function (base, sample) {
  base.sort();
  sample.sort();

  let count = 0;
  let startIdx = 0;

  for (let i = 0; i < sample.length; i++) {
    let idx = base.indexOf(sample[i], startIdx);
    if (idx === -1) return false;

    startIdx = idx + 1;
    count++;
  }

  if (count === sample.length) return true;
};
