function movingStuff(stuff, limit) {
  stuff.sort((a, b) => a - b);
  let cnt = 0;

  for (let i = stuff.length - 1; i >= 0; i--) {
    if (stuff[0] + stuff[i] <= limit) {
      console.log(stuff);
      stuff.splice(0, 1);
      cnt += 1;
      i = i - 1;
    } else cnt += 1;
  }

  return cnt;
}
