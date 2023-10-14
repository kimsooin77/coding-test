function solution(s) {
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(!s.substring(0,i).includes(s[i])) answer.push(-1);
        else {
            let arr = [...s.substring(0,i).matchAll(s[i])];
            arr = arr.map((v) => v.index)
            answer.push(i - Math.max(...arr))
        } 
    }
    return answer; 
}

// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
// });