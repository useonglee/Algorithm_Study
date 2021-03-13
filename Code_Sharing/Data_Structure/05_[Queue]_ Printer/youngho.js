function queuePrinter(bufferSize, capacities, documents) {
    let queue = Array(bufferSize-1).fill(false);
    let kib = documents.shift();
    queue.push(kib)
    let result = 1;
    while( documents.length!==0 || kib !==0 ){
      let deque = queue.shift();
      let enque = documents[0];
      if( deque ){
        kib -= deque;
      }
      if( enque + kib <= capacities ){
        enque = documents.shift();
        queue.push( enque );
        kib+=enque;
      }else{
        queue.push(false)
      }
      result++
    }
    return result;
}
/*
케파 : Kib   버퍼:갯수?
queue는 버퍼만큼의 크기를 가지고 있고, 1초마다 한칸씩 입구에서 출구로 이동시킨다.
queue에서 shift와 push는 꾸준히 이루어지며, queue에 저장된 문서의 케파를 저장해야 된다.
shift한 뒤 푸쉬를 진행하되, shift 되는 문서를 확인하고 
문서가 shift될 경우 해당 크기만큼 케파에서 빼야한다. 
푸쉬를 진행할떈 케파를 먼저 확인하고 넘으면 false를 푸쉬하고 안넘으면 document에서 빼온다.
document의 길이가 0이면서 queue의 케파가 0일 때 끝난다.
*/