function solution(array, n) {
    var answer = 0;
    let new_arr = [];
    let arr = array.map((v) => Math.abs(v-n));
    let num = Math.min(...arr);
    array.forEach((v) => {
        if(Math.abs(v-n) === num) new_arr.push(v);
    })    
    return answer = Math.min(...new_arr);
}

// function solution(array, n) {
//     return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
// }