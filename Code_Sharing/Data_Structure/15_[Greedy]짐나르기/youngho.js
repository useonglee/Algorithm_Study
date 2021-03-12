function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.
  let sorted = stuff.sort((a,b) => b-a).slice()
  let count = 0;
  let weight = 0;
  for(let i = 0; i < sorted.length; i++){
    weight += sorted[i];
    for(let j = i+1; j < sorted.length; j++){
      if(weight+sorted[j]<=limit){
        count++;
        weight+=sorted[j];
        sorted.splice(j,1);
        j--;
        break;
      }
    }
    weight = 0;
  }
  return stuff.length - count;
}