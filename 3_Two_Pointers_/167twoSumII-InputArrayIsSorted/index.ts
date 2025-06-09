function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
}

const arrNum = [2, 7, 11, 15];
const targetNum = 9;
// const arrNum = [2, 3, 4];
// const targetNum = 6;
// const arrNum = [-1, 0];
// const targetNum = -1;

console.log(twoSum(arrNum, targetNum));
