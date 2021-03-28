const rotatedArraySearch = function (rotated, target) {
  let low = 0;
  let high = rotated.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (rotated[mid] === target) {
      return mid;
    }

    if (rotated[low] < rotated[mid]) {
      if (target < rotated[mid] && rotated[low] <= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target <= rotated[high] && rotated[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
