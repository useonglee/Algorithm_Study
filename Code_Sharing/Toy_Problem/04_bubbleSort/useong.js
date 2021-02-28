const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length-1; i++) {
    let swap = 0;
    let isSwap = true;

    for (let j = 0; j < arr.length-1-i; j++) {
      swap = arr[j];
      
      if (arr[j+1] < arr[j]) {
        arr[j] = arr[j+1]
        arr[j+1] = swap;
        isSwap = false;   
      }
    }
    if (isSwap) {
      break;
    }
  }
  return arr;
};
