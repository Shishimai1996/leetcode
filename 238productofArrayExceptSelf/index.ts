//O(n^2)
// function productExceptSelf(nums: number[]): number[] {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         sum *= nums[j];
//       }
//     }
//     if (sum === -0) {
//       sum = 0;
//     }
//     result.push(sum);
//   }
//   return result;
// }

// // const numsArray = [1, 2, 3, 4];
// const numsArray = [-1, 1, 0, -3, 3];
// console.log(productExceptSelf(numsArray));

//O(n)
function productExceptSelf(nums: number[]): number[] {
  let result = [];

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = right;
    right *= nums[i];
    console.log("right", result);
  }

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
    console.log("left", result);
  }

  return result;
}

// const numsArray = [1, 2, 3, 4];
const numsArray = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(numsArray));
