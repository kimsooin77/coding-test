function solution(A, B) {
    var answer = A;
    let count = 0;
    
    for(let i = 0; i < A.length; i++) {
        if(answer === B) return count;
        else if(answer !== B) {
            answer = answer[A.length-1] + answer.substring(0,A.length-1);
            count++;
        } 
    }
    if(count === A.length) return -1;
    return count;
}