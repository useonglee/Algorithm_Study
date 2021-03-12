function queuePrinter(bufferSize, capacities, documents) {
  let time = 0;
  let list = [];

  //인쇄 작업 목록의 용량 합을 구하는 함수
  function sum() {
    var SUM = 0;
    for (let ele of list) {
      SUM += ele;
    }
    return SUM;
  }

  // 방법1. list에 문서를 추가한다. or 0을 추가한다.
  // 방법2. 한칸 씩 앞으로 당긴다. (만약 넘치면 삭제한다.)
  //for문이 아니라 한칸씩 당기는 행위를 매번 반복해줘야함. => while

  for (let i = 0; i < documents.length; i++) {
    while (list.length - 1 <= bufferSize) {
      time++;
      if (sum() + documents[i] <= capacities) {
        list.push(documents[i]); // 인쇄 작업 목록에 추가한다. (추가했으면, 다음 문서를 살펴봐야 한다.)
        if (list.length + 1 > bufferSize) {
          // list.length가 넘치면 제일 앞에 있는 걸 삭제한다.
          list.shift();
        }
        console.log(time + "if문" + list);
        break;
      } else {
        list.push(0); // or 0을 추가한다.
        if (list.length + 1 > bufferSize) {
          // list.length가 넘치면 제일 앞에 있는 걸 삭제한다.
          list.shift();
        }
        console.log(time + "else문" + list);
      }
    }
  }
  return time + bufferSize;
}
