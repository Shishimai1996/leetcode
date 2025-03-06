// function searchInsert(nums: number[], target: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       // 1 >= 0
//       return i; //if the condition is matched, finish loop by return
//     }
//   }
//   return nums.length;
// }

// function searchInsert(nums: number[], target: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     let array = nums
//     let middle = array[array.length / 2];
//     if (middle >= target) {
//         array = array[middle to array.length]
//     } else if(middle < target){
//       array = array[0 to middle]
//     }
//   if(array[i] === target){
//     return i
//   }
//   }

//   return nums.length;
// }

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

const numberArrays = [1, 3, 5, 6];
// const targets = 5;
// const targets = 2;
// const targets = 7;
const targets = 0;

console.log(searchInsert(numberArrays, targets));
