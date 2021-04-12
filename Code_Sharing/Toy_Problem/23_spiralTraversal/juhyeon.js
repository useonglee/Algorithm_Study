const spiralTraversal = function (matrix) {
  let str = "";
  let len = 0;
  let lenlen = 0;

  while (matrix[0] !== undefined) {
    // 1. 위왼쪽에서 위오른쪽으로
    matrix[0].forEach((ele) => (str = str + ele));
    matrix.shift();

    if (matrix[0] !== undefined) {
      // 2. 오른쪽위에서 오른쪽아래로
      len = matrix[0].length;
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][len - 1] !== undefined) {
          str = str + matrix[i][len - 1];
          matrix[i].pop();
        }
      }

      // 3. 아래오른쪽에서 아래왼쪽으로
      lenlen = matrix[matrix.length - 1].length;
      while (lenlen > 0) {
        str = str + matrix[matrix.length - 1].pop();
        lenlen--;
      }
      // pop 후에 빈 배열이 남기 때문에 그걸 지워줘야 함.
      matrix.pop();

      // 4. 왼쪽아래에서 왼쪽위로
      for (let j = matrix.length - 1; j >= 0; j--) {
        str = str + matrix[j][0];
        matrix[j].shift();
      }
    }
  }

  return str;
};
