function solution(arr) {
    var answer = arr;
    let num = 0;
    while(arr.length > Math.pow(2,num)) {
        num++
    }
    for(let i = arr.length; i < Math.pow(2,num); i++) {
        answer.push(0);
    }
    return answer;
}

// function solution(arr) {
//   const length = arr.length;
//   const totalLength = 2 ** Math.ceil(Math.log2(length));
//   return [...arr, ...new Array(totalLength - length).fill(0)];
// }