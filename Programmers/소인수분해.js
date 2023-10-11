function solution(n) {
    var answer = [];
    for(let i = 2; i<=n; i++) {
        let arr = [];
      for(let j = 1; j <= i; j++) {
          if(i % j === 0) arr.push(j)
      }
        if(arr.length === 2) answer.push(i);
        answer = answer.filter((v) => n % v === 0);
    }
    return answer;
}

// function solution(n) {
//     let answer = []

//     let i = 2;
//     while (i <= n) {
//       if (n % i === 0) {
//         answer.push(i)     
//         n = n / i
//       } else {
//       i++        
//       }
//     }

//     return [...new Set(answer.sort((a, b) => a > b ? 1 : -1))]
// }