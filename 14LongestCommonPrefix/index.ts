// function longestCommonPrefix(strs: string[]): string {
//   let result = "";
//   //change the word order by small length.
//   const sortedArray = strs.sort((a, b) => a.length - b.length);
//   //pick up the first word."flow"
//   const firstWord = sortedArray[0];
//   //for each letter in the firstWord compare it with the corresponding letter for whole array
//   for (let i = 0; i < firstWord.length; i++) {
//     //"f"
//     for (let j = 1; j < sortedArray.length; j++) {
//       //"flower","flight"
//       const wordToCompare = sortedArray[j]; //"flower"
//       if (firstWord[i] !== wordToCompare[i]) {
//         //"f" !== "f"
//         return result;
//       }
//     }
//     result += firstWord[i];
//   }
//   //finally return the joined string from array.
//   return result;
// }

function longestCommonPrefix(strs: string[]): string {
  let output = [];
  for (let j = 0; j < strs[0].length; j++) {
    const currentChar = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== currentChar) {
        console.log("1", strs[i][j]);
        return output.join("");
      }
    }
    output.push(currentChar);
  }
  return String(output.join(""));
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
