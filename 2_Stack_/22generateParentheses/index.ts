function generateParenthesis(n: number): string[] {
  const parentheses = {
    "(": ")",
  };
  let result = [];
  let buffer = [];
  for (let i = n; i > 0; i--) {
    buffer.push("(");
    result.push(buffer);
  }
}

const nu = 3;
// const n = 1
console.log(generateParenthesis(nu));
