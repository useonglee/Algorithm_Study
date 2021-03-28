const insertionSort = function (arr, call = (item) => item) {
  while (true){
    let cnt = 0

    for (let i = 1; i < arr.length; i++){
      if(call(arr[i-1]) > call(arr[i])) {
        const save = arr[i]
        arr[i] =  arr[i-1]
        arr[i-1] = save
      }
      else cnt += 1
    }

    if(cnt === arr.length - 1) return arr
  }
};
