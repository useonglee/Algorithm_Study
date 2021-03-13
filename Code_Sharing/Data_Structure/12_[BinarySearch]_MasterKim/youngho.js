function popularRestaurant(n, menus) {
    // TODO: 여기에 코드를 작성합니다.
    menus = menus.sort((a,b)=>a-b)
  
    //menu per sec
    let mps = menus.reduce((acc,cur)=>{
      acc+=1/cur;
      return acc;
    },0);
  
    //손님 양 만큼 음식을 만들 때 걸리는 시간
    //정수로 내림하면 해당 시간엔 n개 만큼으 ㅣ음식이 조리되지 못함
    let meanTimeFloor = parseInt(n/mps);
  
    
    //menu별 해당 시간에 완성된 횟수 count
    //몫을 더해준다
    let temp = 0;
    for(let i = 0; i < menus.length; i++){
      temp+= parseInt(meanTimeFloor/menus[i]);
    }
  
    //내림한 시간부터 1초씩 늘려가며 count하고 모든 손님이 음식을 받으면 반복탈출, 해당 초 리턴
    while(temp<n){
      meanTimeFloor++;
      for(let i = 0; i < menus.length; i++){
        let isInt = meanTimeFloor/menus[i];
        if(isInt%1===0){//시간을 메뉴로 나눴을 때 정수 인 경우 해당 메뉴가 완성됨
          temp+= 1
        }
        if(temp>=n) break;
      }
    }
  
    return meanTimeFloor
}
  //1초에 만들어지는 음식의 수는 menus의 역수를 모두 더한 값.
  
  
  //10,[1,2,3,4] - 평균 4.8초 => 10개 4.8초 걸림 
  //                8개 - 4초
  
  //6 [7, 10] - 평균 24.70
  //             5 - 24초