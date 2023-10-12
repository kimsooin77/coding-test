function solution(babbling) {
    var answer = 0;
    const arr = ['aya','ye','woo','ma'];
    const b_arr = babbling.map((v) => {
        for(let i = 0; i<arr.length; i++) {
            if(v.indexOf(arr[i]) !== -1) v = v.replace(arr[i],'+');
            if(i == arr.length-1) return v;   
        }
    })
    answer = babbling.length - b_arr.filter(v => v.match(/[^\+]/)).length;
    return answer;
}

// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach(word => {
//     if (regex.test(word)) answer++;  
//   })

//   return answer;
// }