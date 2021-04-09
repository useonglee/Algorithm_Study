const balancedBrackets = function (str) {
  // let stack = [];
  str.replace(/[^\(\)\{\}\[\]]/g,"");

  let count = str.length / 2;
  if(str.length%2!==0) return false;
  
  while(count > 0){
    const [l,m,h] = [str.search(/(\(\))/),str.search(/(\{\})/),str.search(/(\[\])/)]
    if(l===-1&&m===-1&&h===-1) return false;
    if(l !== -1){
      str = str.replace(/(\(\))/,"");
      count--;
    }
    if(m !== -1){
      str = str.replace(/(\{\})/,"");
      count--;
    }
    if(h !== -1){
      str = str.replace(/(\[\])/,"")
      count--;
    }
  }

  return true
};
