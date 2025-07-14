function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left = left * nums[i];
  }
  //[1,1,2,6]

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right = right * nums[i];
  }
  //[24,12,4,1]
  return result;
}

const inpu = [1, 2, 3, 4];
//output = [24,12,8,6]

console.log(productExceptSelf(inpu));

// function productExceptSelf(nums: number[]): number[] {
//     const bufferArray = new Array(nums.length).fill(1)

//     let left = 1
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i-1] !== undefined){
//             left *= nums[i-1]
//             bufferArray[i] = left
//         }else{
//             bufferArray[i] = left
//         }
//     }

//     let right = 1
//     for(let i = nums.length -1; i >=0; i--){
//         if(nums[i+1] !== undefined){
//             right *= nums[i+1]
//             bufferArray[i] *= right
//         }else{
//             bufferArray[i] *= right
//         }
//     }
//     return bufferArray
// };
