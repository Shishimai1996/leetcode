function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

const numberArrays = [1, 3, 5, 6];
const targets = 5;
// const targets = 2;
// const targets = 7;
// const targets = 0;

console.log(searchInsert(numberArrays, targets));
