function solution(my_string, num1, num2) {
    let answer = '';
    const str1 = my_string.substring(num1, num1+1);
    const str2 = my_string.substring(num2, num2+1);
    answer = [...my_string].map((v,i) => {
        if(i === num1) v = str2;
        if(i === num2) v = str1;
        else v = v;
        return v;
    })
    return answer.join('');
}

// 방법1 - 구조 분해 할당
// function solution(my_string, num1, num2) {
//     my_string = my_string.split('');
//     [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//     return my_string.join('');
// }

// 방법2
// function solution(my_string, num1, num2) {
//   return my_string
//     .split("")
//     .map((v, i) =>
//       i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v
//     )
//     .join("");
// }