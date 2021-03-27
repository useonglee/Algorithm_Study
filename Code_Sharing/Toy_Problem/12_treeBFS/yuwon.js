let bfs = function (node) {
  let el = [node];
  let arr = []; // 계속 쌓아주기

  while (el.length !== 0) {
    let first = el[0]; // 첫번째
    el = el.slice(1); // 첫번째를 제외한 값을 새로 할당
    arr.push(first.value); // 하나씩 쌓아준다
    first.children.forEach((child) => {
      // first에 있던 children 모두 다시 el에 push
      el.push(child);
    });
  }
  return arr;
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
