const largestProductOfThree = function (arr) {

  arr.sort((a, b) => b - a)
  return Math.max(arr[0]*arr[1]*arr[2], arr[0]*arr[arr.length-1]*arr[arr.length-2]);
  

