function binaryToInteger(value: string) {
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    let startFromTail = Number(value[value.length - 1 - i]);
    const calculationOne = 2 ** i;
    result += calculationOne * startFromTail;
  }
  return result;
}

console.log(binaryToInteger("100"));

// binary to integer calculation
// 100 => 4
// index = 2, 1, 0
// 1 * 2^2 = 4
// 0 * 2^1 = 0
// 0 * 2^0 = 0
// 4 + 0 + 0 = 4
