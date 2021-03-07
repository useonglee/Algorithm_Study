const isSubsetOf = function (base, sample) {
  let newArr = base.concat(sample);
  let setArr = new Set(newArr);
  let realArr = [...setArr];

  if (realArr.length === base.length) {
    return true;
  } else {
    return false;
  }
};
