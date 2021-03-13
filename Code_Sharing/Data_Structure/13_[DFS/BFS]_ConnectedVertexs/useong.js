function connectedVertices(edges) {

  let max = 0
  for (let i = 0; i < edges.length; i++) {
    let find = Math.max(...edges[i].filter(el => typeof el === "number"));
    max < find ? max = find : null;
  }

  let graph = new Array(max+1).fill(0).map(el => new Array(max+1).fill(0));

  //간선 연결
  edges.forEach((el) => {
    let [row,col] = el;
    graph[row][col] = 1;
    graph[col][row] = 1;
  });

  //bfs
  const bfs = (idx) => {
    let q = [idx]
    check[idx] = true;
    while(q.length !== 0) {
      let vertex = q.shift();
      for (let i = 0; i < graph[vertex].length; i++) {
        if (check[i] === false && graph[vertex][i]) {
          check[i] = true;
          q.push(i);
        }
      }
    }
  }
  let count = 0;
  let check = new Array(graph.length).fill(false);
  for (let i = 0; i < max; i++) {
    if (check[i] === false) {
      bfs(i);
      count++
    }
  }
  return count;  
}


// [false,false,false,false,false,false]
// 0: (6) [0, 1, 0, 0, 0, 0]
// 1: (6) [1, 0, 0, 0, 0, 0]
// 2: (6) [0, 0, 0, 1, 0, 0]
// 3: (6) [0, 0, 1, 0, 1, 1]
// 4: (6) [0, 0, 0, 1, 0, 0]
// 5: (6) [0, 0, 0, 1, 0, 0]
