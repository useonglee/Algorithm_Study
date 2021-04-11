const inequalityNumber = function (signs) {
  
  const nums = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9];
  signs = signs.split(' '); // [ '>', '<', '>' ]
  
  // dfs
  const inequality = (idx, result, nums, signs, checked) => {
    if(idx === signs.length) {
      return parseInt(result.join(''));
    }

    const sign = signs[idx];
    
    for (let i = 0; i < nums.length; i++) {
      const right = nums[i];
      // 사용했으면 건너뛴다
      if (checked[right]) continue;

      // 첫번째 부등호가 아닌 경우
      if (idx >= 0) {
        const left = result[result.length-1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째인 경우
      checked[right] = true;
      const target = inequality(idx+1, result.concat(right), nums, signs, checked);
      if (target !== undefined) {
        return target;
      }
      // 다시 사용안한 처리
      checked[right] = false;
    }
    return undefined;
  }

  const min = inequality(-1, [], nums, signs, Array(10).fill(false));
  const max = inequality(-1, [], nums.reverse(), signs, Array(10).fill(false));

  return max-min;
};
