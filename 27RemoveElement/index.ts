// function removeElement(nums: Array<number>, val: number): number {
//   if (nums.length === 0) return 0;
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

// const numberArray = [3, 2, 2, 3];
// const val = 3;
// console.log(removeElement(numberArray, val));
// console.log(numberArray);

function removeElement(nums: Array<number>, val: number): number {
  if (nums.length === 0) return 0;
  let countVal = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      countVal++;
    }
    if (nums[i] != val && countVal > 0) {
      nums[i - countVal] = nums[i];
    }
  }
  // for (let i = nums.length - 1; i >= nums.length - countVal; i--) {
  //   nums[i] = "_";
  // }
  return nums.length - countVal;
}

const numberArray = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(numberArray, val));
console.log(numberArray);
