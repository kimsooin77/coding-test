function solution(number, limit, power) {
    var answer = 0;
    let arr = [];
    for(let i = 1; i <= number; i++) {
        let num = 0;
        for(let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
            if(i % j === 0) num += 2;
            if(i / j === j) num -= 1;
        }
        arr.push(num);
    }
    arr.forEach((v) => {
        if(v <= limit) answer +=v;
        else answer += power;
    });
    return answer;
}

// function solution(number, limit, power) {
//     var answer = 0;
//     for (let n = 1; n <= number; n++)
//     {
//         let count = 0;
//         for (let j = 1; j * j <= n; j++)
//         {
//             if (j * j == n) count++;
//             else if (n % j == 0) count += 2;
//         }
//         if (count > limit) count = power;
//         answer += count;
//     }
//     return answer;
// }