const rotateMatrix = function (matrix, num = 1) {
  // 빈 배열에 matrix[3][0] / [2][0] / [1][0] / [0][0] =>  [i][0] 넣기.
  if (matrix.length === 0) {
    return matrix;
  }
  let result = [];

  function rotateOnce(arr) {
    result = [];
    for (let j = 0; j < arr[0].length; j++) {
      let row = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        row.push(arr[i][j]);
      }
      result.push(row);
    }
    return result;
  }

  while (num > 0) {
    rotateOnce(matrix);
    matrix = result;
    num--;
  }

  return result;
};
