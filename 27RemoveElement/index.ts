function removeElement(nums: Array<number>, val: number): number {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// const numberArray = ["a", "b", "c", "c", "e", "z", "c", "d"];
// const val = "c";
const numberArray = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(numberArray, val));
console.log(numberArray);
