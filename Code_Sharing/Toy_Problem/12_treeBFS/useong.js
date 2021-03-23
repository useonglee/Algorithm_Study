let bfs = function (node) {
  let result = [];
  let q = [node];

  while(q.length !== 0) {
    let vertex = q.shift();
    result.push(vertex.value);

    for(let i = 0; i < vertex.children.length; i++) {
      q.push(vertex.children[i]);
    }
  }
  return result; 
};

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
