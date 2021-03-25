const powerSet = function (str) {
  let setArr = [...new Set(str.split("").sort())];
  let flag = new Array(setArr.length).fill(false);

  const result = [];

  const subSet = function DFS(depth) {
    if (depth === setArr.length) {
      const subSet = setArr.filter((value, index) => flag[index]).join("");
      result.push(subSet);
      result.sort();

      return;
    }

    flag[depth] = true;
    subSet(depth + 1);

    flag[depth] = false;
    subSet(depth + 1);
  };
  subSet(0);
  return result;
};
