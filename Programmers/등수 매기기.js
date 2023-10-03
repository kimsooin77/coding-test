function solution(score) {
    var answer = [];
    score = score.map((v) => (v[0] + v[1])/2);
    let sorted = [...score].sort((a,b) => b-a);
    for(let i = 0; i<score.length; i++) {
        answer.push(sorted.indexOf(score[i])+1)
    }
    return answer;
}