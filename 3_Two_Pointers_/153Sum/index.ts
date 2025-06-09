function threeSum(nums: number[]): number[][] {
  const sort = nums.sort((a, b) => a - b);
  //-4,-1,-1,0,1,2
  let result: number[][] = [];

  for (let i = 0; i < sort.length - 2; i++) {
    if (i > 0 && sort[i] === sort[i - 1]) continue;

    let left = i + 1;
    let right = sort.length - 1;

    while (left < right) {
      const sum = sort[i] + sort[left] + sort[right];

      if (sum === 0) {
        result.push([sort[i], sort[left], sort[right]]);
        left++;
        right--;

        while (left < right && sort[left] === sort[left - 1]) left++; //remove duplicate
        while (left < right && sort[right] === sort[right + 1]) right--; //remove duplicate
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

// const inputNums = [-1, 0, 1, 2, -1, -4];
// const inputNums = [0, 1, 1];
const inputNums = [0, 0, 0];

console.log(threeSum(inputNums));
