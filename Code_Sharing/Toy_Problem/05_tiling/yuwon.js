// Toy 2번이랑 똑같다^^..
let tiling = function (n) {
    let arr = [0,1,2]
    let newTiling = function(n) {
      if(arr[n] !== undefined) {
        return arr[n]
      } else {
        arr[n] = newTiling(n-2) + newTiling(n-1)
        return arr[n]
      }
    }
    return newTiling(n)
  };