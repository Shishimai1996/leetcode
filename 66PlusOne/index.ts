function plusOne(digits: number[]): number[] {
  let result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    //if number is less than 8 add + 1 and return result
    if (result[i] < 9) {
      result[i]++;
      return result;
    } else {
      //if number is 9, change it to 0. if unshift(1) here, it will have a problem when it goes to next element by loop.
      result[i] = 0;
    }
  }
  // add 1 to the left when the every number is 9. ex. [9,9,9] -> [1,0,0,0]
  result.unshift(1);
  return result;
}

// const digits = [1, 2, 3];
// const digits = [4, 3, 2, 1];
// const digits = [9];
// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const digits = [9, 9, 9];

console.log(plusOne(digits));

//the below function will have problems when the digits array has many elements.
// function plusOne(digits: number[]): number[] {
//   const number = Number(digits.join(""));
//   console.log(number);
//   const calculate = number + 1;
//   const result = calculate.toString().split("").map(Number);
//   return result;
// }

// const digits = [1, 2, 3];
// const digits = [4, 3, 2, 1];
// const digits = [9];

// console.log(plusOne(digits));
