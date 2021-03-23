let dfs = function (node) {

  let stack = [node.value];
  for (let i = 0; i < node.children.length; i++) {
    stack.push(...dfs(node.children[i]))
  }
  return stack;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};


