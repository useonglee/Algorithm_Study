function connectedVertices(edges) {
  let graph = {}; // 그래프 몸체

  edges.forEach((el) => {
    // 그래프 공간 확보
    graph[el[0]] = [];
    graph[el[1]] = [];
  });

  edges.forEach((el) => {
    // 각 노드에 인접 정점 추가
    graph[el[0]].push(el[1]);
    graph[el[1]].push(el[0]);
  });

  let result = new Set(); // 중복 안됨
  let answer = [];
  let r = [];
  for (let key in graph) {
    answer.push(bfs(graph, Number(key)));
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      result.add(answer[i][j]);
    }
    r.push(result.size);
  }
  console.log(graph);
  return new Set(r).size;
}

function bfs(graph, startNode) {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
}
