function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let sum = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const value = sum + nums[i];
    //sum or itself?
    sum = Math.max(nums[i], value);
    //before sum or current sum?
    result = Math.max(result, sum);
  }
  return result;
}

const nua = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nua));
