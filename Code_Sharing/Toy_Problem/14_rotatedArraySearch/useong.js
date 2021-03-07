const rotatedArraySearch = function (rotated, target) {

  let max = rotated.length-1;
  let min = 0;
  let mid = parseInt((max + min) / 2);

  if (target <= rotated[max]) {
    min = mid;
  }
  else {
    max = mid;
  }

  while (min <= max) {
    mid = parseInt((max + min) / 2);

    if (rotated[mid] === target) {
      return mid;
    }
    
    if (rotated[mid] >= target) {
        max = mid - 1;
    } 
    else {
        min = mid + 1;
    }
  }
  return -1;
}

