function solution(a, b) {
    let answer = 0;
    let j = 2;
    let max = [];
    let arr = [];
    for(let i = 2; i<=a; i++) {
        if(a % i === 0 && b % i === 0) max.push(i);
    }
    max = max.length >= 1 ? Math.max(...max) : 1;
    b = b / max;
    while(j <= b){
        if(b % j === 0) {
            arr.push(j);
            b = b / j;
            continue;
        } 
        j++;
    }
   answer = arr.filter((v) => v !== 2).filter((v) => v !== 5).length === 0 ? 1 : 2;
    return answer;
}

// 방법 1
// function solution(a, b) {
//     let n = 1;
//     for (let i = 1; i <= Math.min(a,b); i++) {
//         if (a%i===0 && b%i===0) n = i;
//     }

//     b/=n;
//     while (b%2===0) b/=2;
//     while (b%5===0) b/=5;

//     return b === 1 ? 1 : 2;
// }


// 방법2
// function solution(a, b) {
//     let tmpB = b
//     while (tmpB % 2 === 0) tmpB /= 2
//     while (tmpB % 5 === 0) tmpB /= 5
//     if (a % tmpB === 0) tmpB = 1
//     return tmpB === 1 ? 1 : 2
// }
