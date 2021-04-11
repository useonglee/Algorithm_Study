const mergeSort = function (arr) {

  const merge = (left, right) => {
    const answer = [];
    while(left.length && right.length) {
      if (left[0] < right[0]) {
        answer.push(left.shift());
      }
      else {
        answer.push(right.shift());
      }
    }
    while(right.length) answer.push(right.shift())
    while(left.length) answer.push(left.shift());
    return answer; 
  }

  //탈출
  if (arr.length < 2) {
    return arr;
  }

  let pivot = parseInt(arr.length / 2);
  let left = arr.slice(0, pivot);
  let right = arr.slice(pivot);
  return merge(mergeSort(left), mergeSort(right));
};
