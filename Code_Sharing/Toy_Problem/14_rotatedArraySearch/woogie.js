const rotatedArraySearch = function (rotated, target) {
  let f = rotated[0]
  let b = rotated[rotated.length - 1] 
  // let m = Math.ceil((rotated.length - 1) / 2)
  
  if(b >= target){
    for(let i = rotated.length-1; i >= 0; i--){
      if(rotated[i] === target) return i
    }
  } else if (f <= target) {
    for(let i = 0; i <= rotated.length-1; i++){
      if(rotated[i] === target) return i
    }
  }

  return -1
};

