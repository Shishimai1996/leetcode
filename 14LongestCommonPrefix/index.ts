function longestCommonPrefix(strs: string[]): string {
  let result = "";
  //change the word order by small length.
  const sortedArray = strs.sort((a, b) => a.length - b.length);
  //pick up the first word."flow"
  const firstWord = sortedArray[0];
  //for each letter in the firstWord compare it with the corresponding letter for whole array
  for (let i = 0; i < firstWord.length; i++) {
    //"f"
    for (let j = 1; j < sortedArray.length; j++) {
      //"flower","flight"
      const wordToCompare = sortedArray[j]; //"flower"
      if (firstWord[i] !== wordToCompare[i]) {
        //"f" !== "f"
        return result;
      }
    }
    result += firstWord[i];
  }
  //finally return the joined string from array.
  return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
