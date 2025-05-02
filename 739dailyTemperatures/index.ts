// //Time out O(n^2)
// function dailyTemperatures(temperatures: number[]): number[] {
//   let result = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     let found = false;

//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[i] < temperatures[j]) {
//         result.push(j - i);
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       result.push(0);
//     }
//   }
//   return result;
// }

// // const temperature = [73, 74, 75, 71, 69, 72, 76, 73];
// // const temperature = [30, 40, 50, 60];
// const temperature = [30, 60, 90];

// console.log(dailyTemperatures(temperature));

//Time out O(n)
function dailyTemperatures(temperatures: number[]): number[] {
  let result = new Array(temperatures.length).fill(0);
  let stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
    console.log(stack);
  }

  return result;
}

const temperature = [73, 74, 75, 71, 69, 72, 76, 73];
// const temperature = [30, 40, 50, 60];
// const temperature = [30, 60, 90];

console.log(dailyTemperatures(temperature));
