const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  let matrix = createMatrix(village);
  const [rLen, cLen] = [village.length, village[0].length]
  const dr = [0,1,0,-1]
  const dc = [1,0,-1,0]

  let q = [[row, col, 0]]
  while(q.length > 0){
    let [r,c,v] = q.shift();
    for(let i = 0; i < 4; i++){
      let [nr, nc] = [r+dr[i], c+dc[i]]
      if(nr >= 0 && nc >= 0 && nr < rLen && nc < cLen){
        if(matrix[nr][nc] === '1') {
          q.push([nr,nc,v+1]);
          matrix[nr][nc] = '0';
        }
      }
    }
    if(q.length === 0) return v
  }
};