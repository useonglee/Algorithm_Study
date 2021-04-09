const quickSort = function (arr,cb=v=>v) {
  /**
   * NOT FIN
   */
  
  const len = arr.length;
  if (arr.length <= 2) return arr;
  const pivot = parseInt((len-1)/2) // 중앙값
  let l = 0, r = len - 1 // left, right
  while(l <= r){
    while(cb(arr[l])<cb(arr[pivot])) l++; 
    while(cb(arr[r]>cb(arr[pivot]))) r--;

    if(l <= r){
      let temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
      l++;
      r--;
    }

  }

  return [...quickSort(arr.slice(0,pivot),cb),...quickSort(arr.slice(pivot,len),cb)]
};