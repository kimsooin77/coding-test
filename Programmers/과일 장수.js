function solution(k, m, score) {
    let answer = 0;

    let arr =score.sort((a,b) => b-a);
        let new_arr = [];
        for(let i = 0; i<Math.floor(arr.length / m); i++) {
            new_arr.push(arr.slice(i*m,i*m+m))
        }
        if(new_arr.length == 0) return 0;
        answer = new_arr.map((v) => Math.min(...v)).map((v) => v*m).reduce((acc,curr) => acc+curr);
    return answer;
}

// function solution(k, m, score) {
//     let answer = 0;
//     const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
//     for (let i = 0; i < sortedScore.length; i += m) {
//         answer += sortedScore[i] * m;
//     }
//     return answer;
// }