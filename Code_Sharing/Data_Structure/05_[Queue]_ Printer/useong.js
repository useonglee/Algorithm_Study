function queuePrinter(bufferSize, capacities, documents) {
    let bridge = new Array(bufferSize).fill(0);
    let time = 0;
 
    let sum = () => {
        let result = 0;
        for (let i = 0; i < bridge.length; i++) {
            result += bridge[i];
        }
        return result;
    }
    while (bridge) {
        time++;
        bridge.shift();

        if (sum() + documents[0] <= capacities) {
            bridge.push(documents.shift());
        }
        else {
            bridge.push(0);
            if (sum() === 0) {
                break;
            }
        }
    }

    return time;
}


  // -------처음 풀었던 방식--------
  // 처음 문서
  // let firstDoc = documents.shift()
  // // [0]
  // let buffer_weight = new Array(bufferSize-1).fill(0);
  
  // // [0, 7]
  // buffer_weight.push(firstDoc);
  
  // // 현재 무게
  // let cur_weight = firstDoc;
  // // 현재 시간
  // let time = 1;

  // while(cur_weight) {
  //   // 총 무게
  //   cur_weight = cur_weight - buffer_weight.shift();
  //   // 다음으로 올릴 무게
  //   let next_doc = documents[0];

  //   if (cur_weight + next_doc <= capacities) {

  //     buffer_weight.push(next_doc);
  //     documents.shift();
  //     cur_weight = cur_weight + next_doc;
  //   }

  //   else {
  //     buffer_weight.push(0);
  //   }
  //   time++
  // }
  // return time;
