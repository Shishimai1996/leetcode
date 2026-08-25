function solution3(A: number[], B: number[]) {
  const map = new Map<number, number>();
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    map.set(A[i], B[i]);
  }

  if (map.has(A[i])) {
    count++;
  }

  return count;
}

const l = [0, 1, 2, 4, 5];
const B = [2, 3, 3, 3, 2]; //return 3

// const l = [1,2,3];
// const B = [0,0,0]; //return 0

console.log(solution3(l, B));
