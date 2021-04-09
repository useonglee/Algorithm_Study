const mergeSort = function (arr) {
  // if(arr.length===5) return;
  const len = arr.length;
  if(len <= 1) return arr;
  const left = arr.slice(0,parseInt(len/2));
  const right = arr.slice(parseInt(len/2),len);
  return merge(mergeSort(left),mergeSort(right))
};

const merge = (arr1,arr2) => {
  const result = [];
  while(arr1.length > 0 || arr2.length > 0 ){
    if(arr1[0] < arr2[0]){
      result.push(arr1.shift());
    }else if(arr1[0] >= arr2[0]){
      result.push(arr2.shift());
    }
    else if(arr1[0] !== undefined) result.push(arr1.shift())
    else if(arr2[0] !== undefined) result.push(arr2.shift())
  }
  return result;
}