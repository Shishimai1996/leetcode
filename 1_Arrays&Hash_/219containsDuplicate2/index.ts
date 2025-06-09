//Time out
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         if (j - i <= k) {
//           return true;
//         } else {
//           continue;
//         }
//       }
//     }
//   }

//   return false;
// }

// // const inputNUms = [1, 2, 3, 1];
// // const inputK = 3;
// const inputNUms = [1, 2, 3, 1, 2, 3];
// const inputK = 2;

// console.log(containsNearbyDuplicate(inputNUms, inputK));

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const prevIndex = map.get(nums[i])!;

      if (i - prevIndex <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
}

// const inputNUms = [1, 2, 3, 1];
// const inputK = 3;
const inputNUms = [1, 2, 3, 1, 2, 3];
const inputK = 2;

console.log(containsNearbyDuplicate(inputNUms, inputK));
