function solution1(A: number[]): boolean {
  // Implement your solution here
  if (A.length === 0) return false;

  const odds = A.filter((n) => Math.abs(n % 2) === 1);
  const evens = A.filter((n) => n % 2 === 0);

  if (odds.length === evens.length) {
    return true;
  } else {
    return false;
  }
}

// const A = [2, 7, 4, 6, 3, 1];
// const A = [-1, 1];
const A = [-1, 2];

console.log(solution1(A));
