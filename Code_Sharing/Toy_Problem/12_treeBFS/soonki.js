let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  //children을 쭉~ 순회하면서 value를 배열에 담아준다
  //depth가 1일때는 OK. 2일때는???
  //1. 현재 depth의 배열을 돌면서 value를 result에 푸쉬
  //1.1 돌때마다 shift()로 빼주고, 뺀 node의 자식들을 unvisited의 끝에 다시 푸쉬해논다.
  //1.2 현재 depth를 다 돌고나면,이제 unvisited의 요소들은 depth = 2의 노드들이다.
  //2. 위 반복
  //3.가장 밑 depth까지오면 push

  let result = [];
  let unvisited = [node];

  while (unvisited.length !== 0) {
    let currentNode = unvisited.shift();
    result.push(currentNode.value);

    unvisited.push(...currentNode.children);
  }

  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
