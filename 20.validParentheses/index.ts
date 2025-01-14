//define parentheses pairs
const parenthesesPair: { [key: string]: string } = {
  "(": ")",
  "{": "}",
  "[": "]",
};
//check if input s[i] is open parentheses
const isOpenParentheses = (parentheses: string): boolean => {
  if (parentheses === "(" || parentheses === "{" || parentheses === "[") {
    return true;
  }
  return false;
};
//if input s[i] = open parentheses, push to []. if not, check if it is pair parentheses.
function isValid(s: string): boolean {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (isOpenParentheses(s[i])) {
      result.push(s[i]);
    } else {
      if (result.length === 0) {
        return false;
      } else if (parenthesesPair[result[result.length - 1]] === s[i]) {
        result.splice(-1, 1); //delete array's second last element(-2) and last element(-1)
      } else {
        return false;
      }
    }
  }

  if (result.length === 0) {
    return true;
  }
  return false;
}

console.log(isValid("()"));
console.log(isValid("({})"));
console.log(isValid("([)]"));
console.log(isValid("()[]{}"));
console.log(isValid("(({[]})"));
console.log(isValid("]})"));
console.log(isValid("(])"));
