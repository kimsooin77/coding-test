function solution(s) {
    s = s.toLowerCase();
    let answer = '';
    let division = 0;
    
    answer = [...s].map((v) => {
        if(v !== ' ') {
            if(division % 2 === 0) v = v.toUpperCase();
            division++;
        } if(v === ' ') division = 0;
        return v;
    })
    return answer.join('');
}