function popularRestaurant(n, menus) {
    // 가장 오래 걸리는 시간
    let max = n * menus[menus.length-1];
    let min = 1;
    let answer = max;
    
    while(min <= max) {
        let cnt = 0;
        let mid = parseInt((max + min) / 2);
        
        for (let i = 0; i <= menus.length; i++) {
            // menus[i]분 마다 검사할 수 있는 인원 수
            cnt += parseInt(mid / menus[i]);
            if (cnt >= n) {
                // 최솟값 찾아내기
                answer = Math.min(mid, answer);
                break;
            }
        }
        if (cnt >= n) {
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }
    }
    
    return answer;
}
