function sortedSquares(nums: number[]): number[] {
  return nums.map((x) => x * x).sort((a, b) => a - b);
}

const inp = [-4, -1, 0, 3, 10];
console.log(sortedSquares(inp));
