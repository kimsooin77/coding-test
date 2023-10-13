function solution(rank, attendance) {
    let answer = [];
    let new_arr = rank.filter((v,i) => attendance[i]).sort((a,b) => a-b).slice(0,4);
    for(n of new_arr) {
        answer.push(rank.indexOf(n))
    }
    answer = answer[0]*10000 + answer[1]*100 + answer[2];
    return answer;
}

// function solution(rank, attendance) {
//   const [a, b, c] = rank
//     .map((r, i) => [r, i])
//     .filter(([_, i]) => attendance[i])
//     .sort(([a], [b]) => a - b);
//   return 10000 * a[1] + 100 * b[1] + c[1];
// }