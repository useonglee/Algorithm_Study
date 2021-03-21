const sudoku = function (board) {

  const isItValid = function(x, y, k){
    // x
    for(let i = 0; i < 9; i++){
      if(i === x) continue;
      if(board[i][y] === k) return false;
    }
    // y
    for(let i = 0; i < 9; i++){
      if(i === y) continue;
      if(board[x][i] === k) return false;
    }
    // 3 x 3
    for(let i = parseInt((x)/3)*3; i <= parseInt((x)/3)*3+2 ; i++){
      for(let j = parseInt((y)/3)*3; j <= parseInt((y)/3)*3+2; j++){
        if(x===i&&y===j) continue;
        if( board[i][j] === k ) return false;
      }
    }
    return true;
  }
  const sudokuRecursion = function(board,m,n){
    if(n>8){
      n=0;
      m+=1;
    }
    if(m>8){
      return true; 
    } 
    if(board[m][n] === 0){
      for(let i = 1; i <= 9; i++){
        if(isItValid(m,n,i)){// 1. m,n에 i가 들어갈 수 있으면
          board[m][n] = i;   // 2. m,n에 i를 넣고
          if(sudokuRecursion(board,m,n+1)){//3. 다음으로 진행
            return true;// 마지막에 도달해서 true를 리턴하면 계속 true를 리턴하며 돌아옴.
          }
          board[m][n] = 0;// 5. 바로 이전 깊이의 재귀함수로 돌아와서 이전에 넣었던 값 0으로 초기화하고 for문을 지속하며 다음 들어갈 수를 재귀적으로 찾는다.
                          //    for문 다돌았는데 못찾으면 4번이 실행되며 이전 깊이의 재귀함수에서 시작.
        }
      }
      return false;//4. 쭉 진행하다가 1~9까지 넣어봤는데 들어갈 수 있는 수가 없으면 false를 리턴하는데,
    }
    return sudokuRecursion(board,m,n+1)// 0이 아닌 값은 다음으로 진행
  }
  console.log(sudokuRecursion(board,0,0))// 재귀 실행 
  return board
};