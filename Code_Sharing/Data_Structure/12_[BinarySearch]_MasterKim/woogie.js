function popularRestaurant(n, menus) {
  let time = 0;
  let cnt = 0;

  while (n > 0) {
    time += 1;
    for (let i = 0; i < menus.length; i++) {
      if (time % menus[i] === 0) n--;
    }
  }

  return time;
}
