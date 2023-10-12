function solution(arr) {
    var answer = [[]];
    const 행길이 = arr.length;
    const 열길이 = arr[0].length;
    if(행길이 === 열길이) return arr;
    else {
        if(행길이 > 열길이) {
        arr = arr.map((v) => {
            while(v.length < arr.length) {
              v.push(0)   
            }
            return v;
        })
        }
        else for(let i = 행길이; i < 열길이; i++) {
          arr = arr.concat([new Array(열길이).fill(0)]);
        }  
        answer = arr;
    } 
    
    return answer;
}

// function solution(arr) {
//     const N = Math.max(arr.length, arr[0].length)
//     for (let i=0; i<arr.length; i++){
//         while (arr[i].length < N){
//             arr[i].push(0)
//         }
//     }
//     while (arr.length < N){
//         arr.push(Array(N).fill(0))
//     }
//     return arr
// }