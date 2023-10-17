function solution(num, total) {
    let answer = [];
    if(total === 0) {
        for(let i = Math.floor(num / 2); answer.length < num; i--) {
            answer.push(i)
        }
        return answer.sort((a,b) => a-b);
    }
    let minus = 0;
    for(let i = 0; i < num; i++) {
        minus += i;
    }
    let sum = total * num - minus;
    let m = 0;
    for(let j = sum; j >= total; j-=num) {
        if(j === total) answer.push(m);
        m++;
    }   
    for(let i = total - answer[0]; answer.length <= num; i--) {
        answer.push(i);
    }
    return answer.slice(1).sort((a,b) => a - b);
}

// function solution(num, total) {
//     let answer = []

//     for(let i = 1; i <= num; i++) {
//         answer.push(i)
//     }

//     const resultAv = parseInt(total / num)
//     const resultAvIdx = num % 2 === 0 ? parseInt(num / 2) - 1 : parseInt(num / 2)
//     const beforeV = answer[resultAvIdx]

//     return answer.map(i => i = i + (resultAv - beforeV))
// }