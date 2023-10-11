function solution(k, score) {
    var answer = [];
    let arr = [];
    let num = 0;
    
    for(let i = 0; i < score.length; i++) {
       if(answer.length < k) {
       		answer.push(score[i]);
       } else {
        if(score[i] > num) {
            answer.shift();
            answer.push(score[i]);
        }
    }
    answer.sort((a,b) => a-b);
    num = Math.min(...answer);
    arr.push(num);
   }
    return arr;
}

// function solution(k, score) {
//     const stack = []
//     return score.reduce((a,c) => {
//         if(stack.length < k) {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//         }
//         else {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//             stack.shift()
//         }
//         a.push(stack[0])
//         return a
//     },[])
// }