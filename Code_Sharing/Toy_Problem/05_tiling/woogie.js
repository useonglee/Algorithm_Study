let tiling = function (n) {
  let arr = [0,1]

  for(let i = 1; i <= n; i++){
    arr.push(arr[i-1]+arr[i])
  }

  return arr[arr.length-1]
}
