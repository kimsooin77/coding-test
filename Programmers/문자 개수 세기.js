function solution(my_string) {
    const arr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 65)).concat(new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)));
    let answer = new Array(arr.length).fill(0);
    
    [...my_string].forEach((v) => {
        answer[arr.indexOf(v)] += 1
    })
    return answer;
}