function popularRestaurant(n, menus) {
  let arr = [];
  let time = 0;
  while (arr.length < n) {
    time++;
    for (let i = 0; i < menus.length; i++) {
      if (!(time % menus[i])) {
        arr.push(menus[i]);
      }
    }
  }
  return time;
}
