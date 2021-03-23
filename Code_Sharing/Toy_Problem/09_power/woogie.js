function power(base, exponent) {
  let a = 1
  let odd = false

  if(exponent % 2){
    odd = true
    exponent += 1
  } 
  
  for(let i = 1; i <= exponent/2; i++){
    a = (a * base) % 94906249
  }

  return odd ? (a*a/base) % 94906249 : (a*a) % 94906249
}
