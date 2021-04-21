const robotPath2 = function (room, src, sDir, dst, dDir) {
  const [rlen, clen] = [room.length, room[0].length];
  const dr = [0,-1,0,1,0];
  const dc = [0,0,1,0,-1];
  let q = [[...src, sDir, 0, false]];
  const mover = (coord, dir, count, toggle) => {
    let [r, c] = coord;
    while(true){
      let [nr, nc] = [r+dr[dir], c+dc[dir]];
      if(r === dst[0] && c === dst[1]) break;
      if(nr >= rlen || nc >= clen || nr < 0 || nc < 0) break;
      if(room[nr][nc] === 1) break;
      [r, c] = [nr, nc]
      q.push([r, c, dir, count+1, toggle])
    }
    room[r][c] = 1
  }

  let tempRes = null;
  
  while(q.length > 0){
    let [r, c, d, count, toggle] = q.shift();
    let [nr, nc] = [r+dr[d], c+dc[d]]
    // d방향으로 진행할 수 있으면 mover에 넣어주고 나머지 방향을 q에 넣어준다.
    if(r === dst[0] && c === dst[1]){
      tempRes = [count, d];
      break;
    }
    if(nr >= 0 && nr < rlen && nc >= 0 && nc < clen && room[nr][nc] !== 1){
      mover([r, c], d, count, false)
    }
    for(let i = 1; i <= 4; i++){
      if(toggle === true) continue;
      const flag = d % 2;
      if(i !== d){
        if(i % 2 === flag) q.push([r, c, i, count+2, true]);
        else q.push([r, c, i, count+1, true]);
      }
    }
    room[src[0]][src[1]] = 1
  }
  
  if(!tempRes) return -1

  return              tempRes[1] === dDir ? tempRes[0] 
      : Math.abs(tempRes[1] - dDir) === 1 ? tempRes[0]+1 
      : Math.abs(tempRes[1] - dDir) === 3 ? tempRes[0]+1 
      : tempRes[0]+2 
};