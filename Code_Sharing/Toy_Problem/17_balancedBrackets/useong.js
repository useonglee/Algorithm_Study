const balancedBrackets = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push('}');
    }
    else if (str[i] === '[') {
      stack.push(']');
    }
    else if (str[i] === '(') {
      stack.push(')');
    }
    else {
      if (stack.length === 0 || str[i] !== stack[stack.length-1]) {
        return false;
      }
      stack.pop()
    }
  }
  return stack.length === 0;
}

