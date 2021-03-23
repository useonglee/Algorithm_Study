const binarySearch = function (arr, target) {
  // 이진 탐색의 정석
  // 최소 최대를 정해둠
  let min = 0 
  let max = arr.length - 1 

  // 최소가 최대보다 같거나 커질때 까지
  while (min <= max){
    let mid = Math.floor((min + max) / 2) // 중간
    let num = arr[mid] 
    
    if(num === target) return mid
    if(num > target) max = mid - 1 // 목표 값이 중간 값보다 크다면 왼쪽 탐색
    else min = mid + 1 // 목표 값이 작다면 오른쪽 탐색
  }
  
  return -1
};

