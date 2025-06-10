function containsDuplicate(nums: number[]): boolean {
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }
  return false;
}

const inputArray = [1, 2, 3, 1];
// const nums = [1,2,3,4]

console.log(containsDuplicate(inputArray));

// function containsDuplicate(nums: number[]): boolean {
//     let set = new Set();
//     for (let num of nums) {
//         if (set.has(num)) return true;
//         set.add(num);
//     }
//     return false;
// };
//set is one of javascript class like Array, String...
// it can find the element by O(1)

// function containsDuplicate(nums: number[]): boolean {
//     if(nums.length === 0) return false
//      const seen = new Set<number>()

//      for(let i = 0; i < nums.length; i++){
//         if(seen.has(nums[i])){
//             return true
//         }else{
//             seen.add(nums[i])
//         }
//      }
//      return false
//     };
