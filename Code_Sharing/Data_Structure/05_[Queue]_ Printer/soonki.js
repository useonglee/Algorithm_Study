function queuePrinter(bufferSize, capacities, documents) {
  let workList = [];
  let count = 0;

  while (documents.length > 0) {
    // 문서가 없어지기 전까지 반복하겠다

    //현재 workList의 capacity를 계산해준다.
    let currentCapacities = 0;
    for (let i = 0; i < workList.length; i++) {
      currentCapacities += workList[i];
    }

    //documents의 0번째요소를 넣어도 capacities를 초과하지않으면 추가해준다.
    if (currentCapacities + documents[0] <= capacities) {
      workList.push(documents[0]);
      documents.shift();

      //capacities를 초과하면 0을 넣어준다.
    } else if (currentCapacities + documents[0] > capacities) {
      workList.push(0);
    }
    //그결과, 버퍼사이즈 이상이되면 맨앞의 요소를 shift해준다.
    if (workList.length >= bufferSize) {
      workList.shift();
    }

    count++;
  }
  //위의 while문은 마지막 documents요소를 넣은 순간 종료되므로
  //마지막으로 넣은 documents가 작업완료되기까지의 시간은 buffeSize를 더해줘야한다.
  return count + bufferSize;
}
