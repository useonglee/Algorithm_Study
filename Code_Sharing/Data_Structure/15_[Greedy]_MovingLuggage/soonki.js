function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  stuff.sort((a, b) => a - b);

  let count = 0;
  //최대한 큰무게의 짐이랑 같이 넣어야한다.
  //[,42, 60, 73, 103, 167]
  for (let i = stuff.length - 1; i >= 0; i--) {
    if (stuff[0] + stuff[i] <= limit) {
      stuff = stuff.slice(1);
      count += 1;
      i = i - 1; //stuff를 한칸 짤라줬으니까 i도 한칸 줄여줘야한다.
    } else {
      count += 1;
    }
  }
  return count;
}
