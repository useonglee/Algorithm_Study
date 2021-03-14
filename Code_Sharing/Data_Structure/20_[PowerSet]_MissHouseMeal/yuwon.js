function missHouseMeal(sideDishes) {
    sideDishes.sort();        // 문자열을 먼저 정렬
    let flag = new Array(sideDishes.length).fill(false);
    const subSets = [];
  
    const subSet = function DFS (depth) { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
      if (depth === sideDishes.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
        const subSet = sideDishes.filter((value, index) => flag[index]); // 해당 flag true => 부분집합 포함
        subSets.push(subSet); // 부분집합들을 담는 배열에 push
        subSets.sort()        // 빈배열부터 나올 수 있도록 정렬
  
        return;
      }
  
      flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽
      subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출
  
      flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
      subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    }
    
    subSet(0); // depth 0 부터 시작
    return subSets;
  }
  