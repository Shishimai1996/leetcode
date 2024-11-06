function romanToInt(s: string): number {
  const romanNumerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const readNumber = s.split("");

  let result = 0;
  for (let i = 0; i < readNumber.length; i++) {
    if (romanNumerals[readNumber[i]] < romanNumerals[readNumber[i + 1]]) {
      result += romanNumerals[readNumber[i + 1]] - romanNumerals[readNumber[i]];
      i++;
    } else {
      result += romanNumerals[readNumber[i]];
    }
  }
  return result;
}

console.log(romanToInt("III"));
