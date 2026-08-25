// function canJump(nums: number[]): boolean {
//   if (nums.length <= 1) return true;

//   const endIndex = nums.length - 1;
//   console.log({ endIndex });
//   //   if (nums[0] > endIndex) return false;

//   for (let i = 0; i <= endIndex; i++) {
//     let currentValue = nums[i];
//     console.log({ currentValue });
//     for (let j = 1; j <= currentValue; j++) {
//       const nextIndex = j + i;
//       console.log({ nextIndex });
//       if (nextIndex === endIndex) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function canJump(nums: number[]): boolean {
  let maximumPossibleStep = 0;

  for (let i = 0; i < nums.length; i++) {
    // ステップが届かない場所に来たら、false
    if (i > maximumPossibleStep) return false;

    // 各インデックスでジャンプできる最大の位置を計算
    const stepFromCurrent = i + nums[i];
    if (stepFromCurrent > maximumPossibleStep) {
      maximumPossibleStep = stepFromCurrent;
    }
  }

  // 最後のインデックスに到達できるか？
  return maximumPossibleStep >= nums.length - 1;
}

// const ar = [2, 3, 1, 1, 4];
// const ar = [3, 2, 1, 0, 4];
const ar = [2, 0];

console.log(canJump(ar));
