function popularRestaurant(n, menus) {
  // TODO: 여기에 코드를 작성합니다.
  function findN(number) {
    let sum = 0;
    for (let i = 0; i < menus.length; i++) {
      sum = sum + Math.floor(number / menus[i]);
    }
    return sum;
  }
  let min = 1;
  let max = Math.max(...menus) * n;
  let midList = [];

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (findN(mid) < n) {
      min = mid + 1;
    } else {
      midList.push(mid);
      max = mid - 1;
    }
  }

  let count = midList[midList.length - 1];
  return count;
}
