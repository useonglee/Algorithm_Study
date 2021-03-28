const rotatedArraySearch = function (rotated, target) {
  let first = 0;
  let end = rotated.length - 1;

  while (first <= end) {
    let mid = parseInt((first + end) / 2);

    if (rotated[mid] === target) {
      return mid;
    }

    //[3,4,5,6,7,8,9,10,0,1], 10
    //왼쪽
    if (rotated[first] < rotated[mid]) {
      if (target < rotated[mid] && rotated[first] <= target) {
        end = mid - 1;
      } else {
        first = mid + 1;
      }
      // 오른쪽
    } else {
      if (target <= rotated[end] && rotated[mid] < target) {
        first = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
