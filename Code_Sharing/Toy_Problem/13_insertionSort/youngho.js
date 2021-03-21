const insertionSort = function (arr, cb) {
  const defaultcb = (el) => el;
  cb = cb || defaultcb

  let len = arr.length;
  for(let i = 1; i < len; i++){
    let j = i
    while(cb(arr[j])<=cb(arr[j-1])){//cb(arr[j])
      let swap = arr[j];
      arr[j] = arr[j-1]
      arr[j-1] = swap
      j--
    }
  }
  return arr;
};