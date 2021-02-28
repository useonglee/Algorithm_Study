const rockPaperScissors = function (num) {
  if(!num){ num = 3 }
  let values = {'rock':3,'paper':2,'scissors':1}
  let result = [[]];
  for(let i = 0; i < num; i++){
    result = result.reduce((acc,cur)=>{
      for(let keys in values){
          acc.push(cur.concat([keys]));     
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