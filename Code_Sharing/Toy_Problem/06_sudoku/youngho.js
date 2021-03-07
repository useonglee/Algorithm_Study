const sudoku = function (board) {
            /////미완...
    let temp = [0,1,2,3,4,5,6,7,8,9];
    let formatX = board.map(el=>{
      return el.reduce((acc,cur) =>{
        if(cur !== 0){
          acc.push(cur)
        }
        return acc;
      },[])
    })
    let formatY = [];
    for(let i = 0; i < 9; i++){
      let temp = [];
      for(let j = 0; j < 9; j++){
        if(board[j][i] !== 0) {temp.push(board[j][i])}
      }
      formatY.push(temp);
    }
    let format33 = [];
    for(let k = 0; k < 9; k++){
      let temp = [];
      for(let i = (k%3)*3; i < (k%3)*3+3 ; i++){
        for(let j = parseInt(k/3)*3; j < parseInt(k/3)*3+3; j++){
          if( board[i][j] !== 0 ){temp.push( board[i][j] )}
        }
      }
      format33.push(temp)
    }
    ///0의 좌표배열들을 넣은 배열을 리턴해주는 함수
    const zeroFinder = function(board){
      let temp2 = [];
      board.forEach((el,i) => {
        let oneline = el.reduce((acc, cur, idx) => {
          if(cur === 0){
            acc.push([i,idx]);
          };
          return acc;
        },[]);
      temp2 = [...temp2, ...oneline]
      });
      return temp2;
    };
    
  
  
    //좌표를 받아와서 그 좌표에 들어갈 수 있는 후보군 배열로 리턴하는 함수
    const acceptableValueFinder = function(x, y){
      return temp.filter( el => {
        [ ...formatX[x], ...formatY[y],...format33[parseInt(x/3)+parseInt(y/3)+2] ].indexOf(el) === -1 
      })
    };
  
    //
    let zeroCoord = zeroFinder(board);
    let stack = [];
    stack.push(zeroCoord.shift())
    while(stack.length !== 0){
  //////
  //////
  //////
  //////
    }
  
  
  
  
  
    return board
  };