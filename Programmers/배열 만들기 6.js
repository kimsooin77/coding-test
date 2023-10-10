function solution(arr) {
    var answer = [];
    let i = 0;
    const stk = [];
    while(i < arr.length) {
        if(stk.length == 0) stk.push(arr[i]);
        else if(stk.length !== 0 && stk[stk.length-1] == arr[i])  stk.pop();
        else  stk.push(arr[i]);
        i++;
    }
    return answer = stk.length !== 0 ? stk : [-1];
}