function queuePrinter(bufferSize, capacities, documents) {
  let answer = 0;
  let list = Array(bufferSize).fill(0);

  while (true) {
    answer += 1;
    list.shift();

    if (sum(list) + documents[0] <= capacities) {
      list.push(documents[0]);
      documents.shift();
    } else {
      list.push(0);
    }
    if (documents.length === 0) break;
  }

  return answer + bufferSize;
}

function sum(arr) {
  return arr.reduce((a, c) => a + c, 0);
}
