const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.

  let max = arr.length-1
  let min = 0

  while(min <= max) {
    let mid = parseInt((max + min)/2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      max = mid - 1
    }
    else {
      min = mid +1
    }
  }
  return -1
};
  

