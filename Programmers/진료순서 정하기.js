function solution(emergency) {
    let answer = [];
    let arr = [...emergency].sort((a,b) => b-a);
    for(let i = 0; i < arr.length; i++) {
        answer.push(arr.indexOf(emergency[i])+1);
    }
    return answer;
}