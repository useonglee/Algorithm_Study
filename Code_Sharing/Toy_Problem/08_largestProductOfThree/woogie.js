const largestProductOfThree = function (arr) {
  let answer = 0
  let perm = permutation(arr,3)

  perm.forEach((el) => {
    let save = el.reduce((a,c) => a * c, 1)
    if(!answer && save < 0) answer = save
    if(answer < save) answer = save
  })

  return answer
};

function permutation(arr, selectNum) {
  let result = [];
  console.log(`selectNum ${selectNum}`)
  if (selectNum === 1) {
    console.log(`return`)
    console.log(arr.map((v) => [v]))
    return arr.map((v) => [v]);
  }

  arr.forEach((v, idx, arr) => {
    console.log(`1.arr ${arr}`)
    const fixer = v;
    console.log(`2.fixer ${fixer}`)
    const restArr = arr.filter((_, index) => index !== idx);
    console.log(`3.restArr ${restArr}`)
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    console.log('--- combineFixer')
    console.log(combineFixer)
    result.push(...combineFixer);
    console.log(`--- result`)
    console.log(result)
  });
  return result;
}

