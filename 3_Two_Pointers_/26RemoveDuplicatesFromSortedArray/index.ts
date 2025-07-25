// function removeDuplicates(nums: number[]) {
//   if (nums.length === 0) return 0;

//   let uniqueNumber = nums[0]; //0
//   let result = [nums[0]]; //[0]
//   let popArray = [];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === uniqueNumber) {
//       //0 === 0,
//       popArray.push(nums[i]);
//     } else if (nums[i] !== uniqueNumber) {
//       //1 !== 0
//       result.push(nums[i]);
//       uniqueNumber = nums[i]; //1
//     }
//   }
//   // if (popArray.length > 0) {
//   //   for (let i = 0; i < popArray.length; i++) {
//   //     result.push(0);
//   //   }
//   // }
//   console.log({ result });
//   console.log({ popArray });
//   const k = result.length;
//   return k;
// }

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0; // If the array is empty, return 0

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// const numbers = [1, 1, 2];
const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(numbers));

console.log(numbers);
