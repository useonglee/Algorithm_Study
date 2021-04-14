const robotPath = function (room, src, dst) {
  // BFS
  const dr = [0,1,0,-1];
  const dc = [1,0,-1,0];

  let q = [src];

  while(q.length > 0){
    let [r,c] = q.shift();
    for(let i = 0; i < 4; i++){// 상하좌우 탐색
      let nr = r + dr[i];
      let nc = c + dc[i];
      if(nr >= 0 && nr < room.length && nc >= 0 && nc < room[0].length){// 다음 좌표가 room의 범위안에 있을 경우 
        if(room[nr][nc] === 0){// 다음 좌표가 갈 수 있는 곳인 경우 
          q.push([nr, nc]);
          room[nr][nc] = room[r][c] + 1;
          room.forEach(el=>{
            console.log(JSON.stringify(el));
          })
          console.log(0);
        } 
        if(nr === dst[0] && nc === dst[1]) return room[r][c] + 1;// 목표좌표인 경우 현재까지 온 거리 +1 리턴
      }
    }
  }
  return -1
};
const room = [
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
const src = [0, 0];
const dst = [0, 2];
robotPath(room, src, dst)