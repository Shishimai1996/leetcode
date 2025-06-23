function missingNumber(nums: number[]): number {
  const set = new Set<number>(nums);

  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) return i;
  }
  return -1;
}

const i = [3, 0, 1];
// const i = [0, 1];

console.log(missingNumber(i));

// function missingNumber(nums: number[]): number {
//     if(nums.length <=1){
//         if(nums[0] === 0){
//             return 1
//         }else if(nums[0] === 1){
//             return 0
//         }
//     }
//     //[0,1,3]
//     //[0,1]
//     const sortArray = nums.sort((a, b) => a - b)
//     let current = 0
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === current + 1) {
//             current++
//         } else {
//             return current + 1
//         }
//     }
//     return current+1
// };
