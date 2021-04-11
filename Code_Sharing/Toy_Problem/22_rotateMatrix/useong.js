const rotateMatrix = function (matrix, k = 1) {
  if(matrix.length === 0) {
    return [];
  }
  let [row, col] = [matrix.length, matrix[0].length];

  k = k % 4;

  while(k > 0) {
    let temp = [];
    for (let init = 0; init < col; init++) {
      temp.push([]);
    }

    // row,col = 3, 4
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        // 맨끝의 col이 맨 앞으로 와야하기때문에 => unshift
        temp[j].unshift(matrix[i][j]);
      }
    }
    matrix = temp;
    k -= 1;
    // advanced: 회전할때마다 바뀜
    [row, col] = [col, row];
  }
  return matrix;  
};
