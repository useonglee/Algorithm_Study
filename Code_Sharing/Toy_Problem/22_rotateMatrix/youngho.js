const rotateMatrix = function (matrix, rotate = 1) {
  if(matrix.length===0) return [];
  let [r,c] = [matrix.length, matrix[0].length ];
  rotate = rotate % 4;

  while(rotate !== 0){
    let result = [];
    for(let i = 0; i < c; i++){
      result.push([])
    }
    for(let i = 0; i < r; i++){
      for(let j = 0; j < c; j++){
        result[j].unshift(matrix[i][j]);
      }
    }
    matrix = result;
    rotate--;
    [r, c] = [c, r];
  }
  return matrix;
};