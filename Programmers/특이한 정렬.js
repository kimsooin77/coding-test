function solution(numlist, n) {
    var answer = [];

    answer = numlist.sort((acc,curr) => Math.abs(acc-n) - Math.abs(curr-n) === 0 ? curr - acc : Math.abs(acc-n) - Math.abs(curr-n));
    return answer;
}