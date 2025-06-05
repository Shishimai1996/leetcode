//1 => 1
//2 => 1+1, 2
//3 => 1+1+1, 1+2, 2+1
//4 => 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2
//5 => 1+1+1+1+1, 2+1+1+1, 1+2+1+1, 1+1+2+1, 1+1+1+2, 2+2+1, 2+1+2, 1+2+2
//6 => 1+1+1+1+1+1, 2+1+1+1+1, 1+2+1+1+1, 1+1+2+1+1, 1+1+1+2+1, 1+1+1+1+2, 2+2+1+1, 2+1+2+1, 2+1+1+2, 1+2+2+1, 1+2+1+2, 1+1+2+2, 2+2+2

function climbStairs(n: number): number {
  let count = 0;
  let calculate = [];
  //３けたと２桁
  for (let i = 0; i < n; i++) {
    let array = [];
    for (let j = 0; j++; ) {
      let calculate = n;
      if (calculate - 2 >= 2) {
        array.push(2);
        calculate - 2;
      } else {
        calculate;
      }
    }
  }
}

const n = 2;
// const number = 3
console.log(climbStairs(n));
