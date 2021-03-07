const largestProductOfThree = function (arr) {
    let temp = arr.sort((a,b)=> a-b)
    let [a,b,c,d,e] = [...temp.slice(0,2),...temp.slice(-3)];//음수가 있을 수도 있어서 앞에 두개도 가져옴
    if(e <= 0){//전부다 음수
        return c*d*e
    }else{
        if(a*b>c*d){//a,b가 음수인데 c*d 보다 클 경우, e는 비교대상 x
            return a*b*e 
        }else{
            return c*d*e 
        }
    }
};


// const largestProductOfThree = function (arr) {
//     let temp = arr.sort((a,b)=> a-b)
//     let [a,b,c,d,e] = [...temp.slice(0,2),...temp.slice(-3)];
//     return e <= 0   ? c*d*e : 
//            a*b>c*d  ? a*b*e : c*d*e 
// };