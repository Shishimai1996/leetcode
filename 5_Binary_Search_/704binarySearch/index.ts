function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// const numb = [-1, 0, 3, 5, 9, 12];
// const t = 9;

const numb = [-1, 0, 3, 5, 9, 12];
const t = 2;

console.log(search(numb, t));
