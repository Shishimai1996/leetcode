function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const sort = [...new Set(nums)].sort((a, b) => a - b);
  console.log(sort);
  //[1,2,3,4, 100, 200]
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < sort.length; i++) {
    if (sort[i] === sort[i - 1] + 1) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }
  return Math.max(maxLength, currentLength);
}

// const num = [100, 4, 200, 1, 3, 2];

// const num = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const num = [1, 0, 1, 2];

// const num = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

console.log(longestConsecutive(num));
