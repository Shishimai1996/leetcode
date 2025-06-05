function theSmallestInteger(array: number[]) {
  if (array.length === 0) return null;

  const sortArray = Array.from(new Set(array.filter((n) => n > 0))).sort(
    (a, b) => a - b
  );

  let result = 1;

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] === result) {
      result++;
    } else if (sortArray[i] > result) {
      break;
    }
  }
  return result;
}

// const example = [1, 2, 4, 3, 6, 1];
const example = [-1, -3];

console.log(theSmallestInteger(example));
