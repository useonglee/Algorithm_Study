const rockPaperScissors = function (num) {
  if(!num){ num = 3 }
  let values = ['rock','paper','scissors']
  let result = [[]];
  for(let i = 0; i < num; i++){
    result = result.reduce((acc,cur)=>{//result 의 요소하나를 받아와서 세배로 불리기
      for(let j = 0; j < 3; j++){//세배로 불리기 위해 acc에 push를 세번 반복
        acc.push(cur.concat([values[j]]));
      }
      
    return acc;
    },[])
  } 
  return result
};

// const rockPaperScissors = function (num) {
//   let values = {'rock':3,'paper':2,'scissors':1}
//   let result = [['rock'],['paper'],['scissors']];

//   for(let i = 0; i < num-1; i++){

//     result = result.reduce((acc,cur)=>{

//       for(let keys in values){
//         if(values[keys]<=values[cur.slice(-1)]){
//           acc.push(cur.concat([keys]));
//         }
//       }
//     return acc;
//     },[])
//   } 
//   return result
// };
//                1                           2                3

//     11         12        13        22       23             33

// 111 112 113    122 123   133     222 223    233            333