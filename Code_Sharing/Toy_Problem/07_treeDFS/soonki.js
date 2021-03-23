let dfs = function (node, result = []) {
  // TODO: 여기에 코드를 작성합니다.
  //0. 일단 value result에 푸쉬
  //1. 칠드런이 있는지 확인한다.
  //1.1 칠드런이 있으면 value 푸쉬하고, 0번째 요소부터 또 있는지 확인한다. 없을 때까지
  //1.2 없으면 value 푸쉬하고 result return

  result.push(node.value);

  //아래 탈출조건 없어도 된다. for문 조건이 배열이니까 배열길이가 0이면 알아서 탈출함
  if (!node.children.length) return result;
  else {
    for (let child of node.children) {
      dfs(child, result);
    }
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
