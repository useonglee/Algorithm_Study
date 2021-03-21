function power(base, exponent) {
    let result = 1;
    for(let i = 0; i < exponent; i++){
      result = (base*result)%94906249
    }
    
    return result;
  }