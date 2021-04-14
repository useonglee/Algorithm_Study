const spiralTraversal = function (matrix) {
  const visited = [];
  matrix.forEach(el => visited.push(Array(el.length).fill(false)))
  const dr = [0,1,0,-1]
  const dc = [1,0,-1,0]

  let result = matrix[0][0];
  let i = 0;
  const q = [[0,0]];
  visited[0][0] = true;

  while(q.length > 0){
    let [r,c] = q.shift();
    while(true){
      let nr = r+dr[i%4]
      let nc = c+dc[i%4]
      if(visited[nr]&&visited[nr][nc] === false){
        visited[nr][nc] = true;
        result += matrix[nr][nc];
        r = nr;
        c = nc;
      }
      else{
        if(visited[r+dr[(i+1)%4]][c+dc[(i+1)%4]] === false) q.push([r,c]);
        break;
      }
    }
    i++;
  }
  return result;
};
