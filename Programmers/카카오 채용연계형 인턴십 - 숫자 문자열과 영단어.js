function solution(s) {
    const n_arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    n_arr.forEach((v,i) => {
        s = s.replaceAll(v,i)
        return s;  
    })
    return parseInt(s);
}

// join을 사용하여 인덱스로 대체하기
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }