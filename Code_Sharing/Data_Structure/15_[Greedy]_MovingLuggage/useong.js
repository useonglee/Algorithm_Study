function movingStuff(stuff, limit) {

  stuff.sort((a, b) => a - b);
  let count = 0;
  let max = stuff.length-1;
  let min = 0;

  while(min <= max) {
    if (stuff[min] + stuff[max] <= limit) {
      min += 1;
    }
    
    max -= 1;
    count += 1;
  }

  return count;
}
