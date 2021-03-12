function connectedVertices(edges) {
  let count = edges.length;
  let arr = [];
  let boolean = false;
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      if (
        edges[i][0] === edges[j][1] ||
        edges[i][0] === edges[j][0] ||
        edges[i][1] === edges[j][0] ||
        edges[i][1] === edges[j][1]
      ) {
        boolean = true;
      } else {
        arr = edges.slice(0, i);
        for (let k = 0; k < arr.length; k++) {
          if (
            edges[k][0] === edges[j][1] ||
            edges[k][0] === edges[j][0] ||
            edges[k][1] === edges[j][0] ||
            edges[k][1] === edges[j][1]
          ) {
            boolean = true;
          }
        }
      }
    }
    if (boolean === true) {
      count = count - 1;
      boolean = false;
    }
  }
  return count;
}
