const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.  
  
  let isSubset = true;
  let setBase = new Set (base)

  for (let i = 0; i < sample.length; i++) {
    if (!(setBase.has(sample[i]))) {
      isSubset = false;
    }
  }
  return isSubset;
}
