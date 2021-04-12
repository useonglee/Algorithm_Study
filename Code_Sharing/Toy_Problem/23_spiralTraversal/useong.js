const spiralTraversal = function (matrix) {
  let result = '';
  let startColumn = 0;
  let endColunm = matrix[0].length-1;
  let startRow = 0;
  let endRow = matrix.length-1;

  while (startColumn <= endColunm && startRow <= endRow) {
    for (let i = startColumn; i <= endColunm; i++) {
      result = result + matrix[startRow][i];
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result = result + matrix[i][endColunm];
    }
    endColunm--;

    for (let i = endColunm; i >= startColumn; i--) {
      result = result + matrix[endRow][i];
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result = result + matrix[i][startColumn]
    }
    startColumn++;
  }

  let trash = Math.abs(endColunm - endRow);
  if (endColunm !== endRow) {
      return result.slice(0, -trash);
  }

  return result;  
};
