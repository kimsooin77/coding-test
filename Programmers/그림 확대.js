function solution(picture, k) {
    var answer = [];
    let arr = [];
    arr = picture.map((v) => v.split('').map((s) => s.replace(s,s.repeat(k))).join(''));
    arr.forEach((v) =>{
        for(let i = 0; i<k; i++) {
            answer.push(v);
        }
    });
    return answer;
}