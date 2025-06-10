// //define parentheses pairs
// const parenthesesPair: { [key: string]: string } = {
//   "(": ")",
//   "{": "}",
//   "[": "]",
// };
// //check if input s[i] is open parentheses
// const isOpenParentheses = (parentheses: string): boolean => {
//   if (parentheses === "(" || parentheses === "{" || parentheses === "[") {
//     return true;
//   }
//   return false;
// };
// //if input s[i] = open parentheses, push to []. if not, check if it is pair parentheses.
// function isValid(s: string): boolean {
//   let result = [];

//   for (let i = 0; i < s.length; i++) {
//     if (isOpenParentheses(s[i])) {
//       result.push(s[i]);
//     } else {
//       if (result.length === 0) {
//         return false;
//       } else if (parenthesesPair[result[result.length - 1]] === s[i]) {
//         result.splice(-1, 1); //delete array's second last element(-2) and last element(-1)
//       } else {
//         return false;
//       }
//     }
//   }

//   if (result.length === 0) {
//     return true;
//   }
//   return false;
// }

function isValid(s: string): boolean {
  const bufferArray = [];
  const pairs: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    bufferArray.push(s[i]);
    while (bufferArray.length >= 2) {
      const last = bufferArray[bufferArray.length - 1];
      const secondLast = bufferArray[bufferArray.length - 2];

      if (pairs[secondLast] === last) {
        bufferArray.pop();
        bufferArray.pop();
      } else {
        break;
      }
    }
  }
  if (bufferArray.length === 0) {
    return true;
  } else {
    return false;
  }
}

// const s = "()"

// console.log(isValid(s))
// console.log(isValid("()"));
// console.log(isValid("({})"));
// console.log(isValid("([)]"));
console.log(isValid("()[]{}"));
// console.log(isValid("(({[]})"));
// console.log(isValid("]})"));
// console.log(isValid("(])"));

// function isValid(s: string): boolean {
//   if(s.length <=1) return false
//   const brackets = {
//       '(': ')',
//       '{': '}',
//       '[': ']'
//   }

//   let buffer = []

//   for (let i = 0; i < s.length; i++) {
//       if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//           buffer.push(s[i])
//       } else {
//           if (buffer.length === 0) return false;
//           if (brackets[buffer[buffer.length - 1]] === s[i]) {
//               buffer.pop()
//           }else{
//               return false
//           }
//       }
//   }
//   if (buffer.length === 0) {
//       return true
//   } else {
//       return false
//   }
// };
