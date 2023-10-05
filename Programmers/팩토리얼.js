function solution(n) {
    var answer = 0;
    let fac = 1;
    let i = 1;
    const new_arr = [];
    while(fac <= n) {
        fac *= i;
        if(fac <= n)  new_arr.push(i);
        i++;
    }
    return answer = Math.max(...new_arr);
}