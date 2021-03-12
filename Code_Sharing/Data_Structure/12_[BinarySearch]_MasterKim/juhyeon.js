function popularRestaurant(n, menus) {
  // 총 몇 인분인지 계산하는 함수
  function countServings(time) {
    let totalServings = 0;
    for (let ele of menus) {
      totalServings = totalServings + parseInt(time / ele);
    }
    if (totalServings >= n) {
      return true;
    }
    return false;
  }

  let min = 1;
  let max = Math.max(...menus) * n;

  while (min <= max) {
    let mid = parseInt((min + max) / 2);

    if (countServings(mid)) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}
