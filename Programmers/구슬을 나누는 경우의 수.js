function solution(balls, share) {
  let nFac = balls;
  let division = share;

  for (let i = 1; i < share; i++) {
    nFac *= balls - i;
    division *= share - i;
  }
  return nFac / division;
}

// 재귀함수를 이용한 풀이
// const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

// function solution(balls, share) {
//   return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
// }