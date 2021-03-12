function movingStuff(stuff, limit) {
  stuff.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < stuff.length; i++) {
    for (let j = i + 1; j < stuff.length; j++) {
      if (limit - stuff[i] >= stuff[j]) {
        let idx = stuff.indexOf(stuff[j]);
        stuff.splice(idx, 1);
        break;
      }
    }
  }
  return stuff.length;
}
