const binarySearch = function (arr, target) {
    let max = arr.length-1;
    let min = 0;
    while(max >= min){
      let midIdx = Math.ceil((max+min)/2);
      if(arr[midIdx]===target){
        return midIdx;
      }
      if(arr[midIdx] > target){
        max = midIdx-1
      }else{
        min = midIdx+1
      }
    }
    return -1
  };