// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// const nums = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(nums, target));

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    //{(3,0)}
    console.log("begin", map);
    console.log("numi", nums[i]);
    const value = target - nums[i];
    console.log({ value });
    if (map.has(value)) {
      return [map.get(value)!, i];
    }

    map.set(nums[i], i);
    console.log("end", map);
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

// const nums = [3, 2, 4];
// const target = 6;

console.log(twoSum(nums, target));
