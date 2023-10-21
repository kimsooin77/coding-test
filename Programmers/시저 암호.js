function solution(s, n) {
    let answer = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    answer = [...s].map((v) => {
        if(v !== ' ') {
            if(upper.includes(v)) {
                let num = upper.search(v) + n;
                v = upper.length > num ? upper[num] : upper[num-upper.length];
            } else {
                let num = lower.search(v) + n;
                v = lower.length > num ? lower[num] : lower[num-lower.length];
            }
            return v;
        }
        return v;
    }).join('');
    return answer;
}


// function solution(s, n) {
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var answer= '';

//     for(var i =0; i <s.length; i++){
//         var text = s[i];
//         if(text == ' ') {
//             answer += ' '; 
//             continue;
//         }
//         var textArr = upper.includes(text) ? upper : lower;
//         var index = textArr.indexOf(text)+n;
//         if(index >= textArr.length) index -= textArr.length;
//         answer += textArr[index];
//     }
//     return answer;
// }