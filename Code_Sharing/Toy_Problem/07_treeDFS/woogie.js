let dfs = function (node) {
  let nodes = [node] // 노드 담을 공간
  let visited = [] // 방문 체크

  while(nodes.length !== 0){
    let nd = nodes.pop()

    if(!visited.includes(nd)){
      visited.push(nd.value)
      
      for(let i = nd.children.length-1; i >= 0; i--){
        nodes.push(nd.children[i])
      }
    }
  }
  
   return visited
}

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
