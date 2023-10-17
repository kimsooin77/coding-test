function solution(common) {
    let answer = 0;
    let two = common[2];
    let one = common[1];
    let zero = common[0];
    let num = two % one === 0 && one % zero === 0 ? two / one : two - one;
    if(two % one === 0 && one % zero === 0) {
        answer = common[common.length-1] * num;
    }
    else answer = common[common.length-1] + num;
    return answer;
}

// function solution(common) {
//     if ((common[1]-common[0])==(common[2]-common[1])){
//         return common.pop() + common[1] - common[0];
//     }
//     else{
//         return common.pop()*common[1]/common[0];
//     }
// }