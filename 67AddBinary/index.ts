function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  let result: string[] = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;

    const calculate = bitA + bitB + carry;
    carry = 0;
    if (calculate >= 2) {
      carry++;
      result.unshift((calculate%2).toString());
    } else {
      result.unshift(String(calculate));
    }
    i--;
    j--;
  }
  const string = result.join("");
  return string;
}

// const a = "11";
// const b = "1";
// const a = "1010";
// const b = "1011";
const a = "1111";
const b = "1111";
console.log(addBinary(a, b));

// function addBinary(a: string, b: string): string {
//     const sum = parseInt(a, 2) + parseInt(b, 2);

//     const result = sum.toString(2);
//     return result;
//   }

//   // const a = "11";
//   // const b = "1";
//   const a = "1010";
//   const b = "1011";
//   console.log(addBinary(a, b));
