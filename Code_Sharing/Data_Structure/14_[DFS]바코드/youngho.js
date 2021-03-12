function barcode(len) {
    let queue = ['1'];
    const DFS = function(){
    let deque = queue.shift();
    if(deque.length === len){
      return deque;
    }
    for(let i = 1; i <= 3; i++){
      let temp = deque+i
      let toggle = true
      for(let j = 1; j < temp.length; j++ ){
        // let reg = new RegExp(`(${temp.slice(-j)})`)
        // if( temp.split(reg).length > 3 ){
        if( temp.slice(temp.length-2*j,temp.length-j) === temp.slice(-j) ){
          toggle = false;
          break;
        }         
      }
      if(toggle){
        queue.push(temp)
        let isVariable =  DFS();
        if(isVariable) return isVariable;
      }
    }
  }  
  return DFS()
}