let bfs = function (node) {
  let nodes = [node]
  let visited = []

  while(nodes.length !== 0){
    let nd = nodes.shift()

    visited.push(nd.value)
    nd.children.map(el => nodes.push(el))
  }

   return visited
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

