const bubbleSort = function (arr) {
    let temp = null;
    while(true){
      let bool = false;
      for(let i = 0, len = arr.length; i < len; i++){
        if(arr[i] > arr[i+1]){
          temp = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = temp;
          bool = true; 
        }
      }
      if(!bool){ break }
    }    
    return arr;
  };