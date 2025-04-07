function twoCrystalBalls(breaks: boolean[]): number {
  //if array length is 100, jmpAmount become 10. 10^2 = 100. root 100 = 10.
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  console.log(jmpAmount);
  let i = jmpAmount; //10
  //check if 10 = true (if crystal is broken?). if so, stop running. go next.
  for (; i < breaks.length; i += jmpAmount) {
    //check 10 -> 20 -> 30...
    if (breaks[i]) {
      // breaks[i] === true
      break;
    }
  }
  //if breaks[i] === true, go back jmpAmount and check one by one.
  i -= jmpAmount;
  //   for (let j = 0; j < jmpAmount && i < breaks.length; ++j, i++) {
  while (i < breaks.length) {
    if (breaks[i]) {
      return i;
    }
    i++;
  }
  return -1;
}
// const array = [false, false, false, false, false, true, true, true, true, true];
// const array = [true, true, true, true, true, true, true, true, true, true];
const array = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
];

console.log(twoCrystalBalls(array));

// O(√n)
// find the first true from array
// [false, false, false, false, false, false, false, false, false, true, true, true, .....] length = 100
//                                                                         * find
//    ->     ->     ->     ->     ->     ->     ->     ->     ->     *
// √100 = 10
// 1. check index 10 -> 20 -> 30 ... = true?
// 2. go back i = i - 10 and check if array[i] === true one by one.
// return the first true index.
// if array.length = 100 and the first true is the last one, this function's lead time is 20.
// (1. check index 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 + check index 90, 91, 92, 93, 94, 95, 96, 97, 98, 99)
