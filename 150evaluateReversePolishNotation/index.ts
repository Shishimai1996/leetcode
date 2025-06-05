function evalRPN(tokens: string[]): number {
  let buffer = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
      buffer.push(Number(token));
    } else {
      const b = buffer.pop()!;
      const a = buffer.pop()!;
      let result = 0;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = Math.trunc(a / b);
          break;
      }

      buffer.push(result);
    }
  }
  return buffer[0];
}

// const tokens = ["2", "1", "+", "3", "*"];
// const tokens = ["4", "13", "5", "/", "+"];
const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(tokens));
