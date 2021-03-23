const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let max = arr.length - 1;
  let min = 0;

  while (min <= max) {
    let midIdx = Math.floor((min + max) / 2);
    let midEl = arr[midIdx];

    if (target === midEl) return midIdx;
    if (target > midEl) min = midIdx + 1;
    else max = midIdx - 1;
  }
  return -1;
};
