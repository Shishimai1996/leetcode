function lengthOfLongestSubstring(s: string): number {
  let result: string[] = [];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (!result.includes(s[i])) {
      result.push(s[i]);
    } else {
      const index = result.indexOf(s[i]);

      result = result.slice(index + 1);
      result.push(s[i]);
    }

    maxLength = Math.max(maxLength, result.length);
  }
  return maxLength;
}

const string = "abcabcbb";
// const string = "bbbbbb";
console.log(lengthOfLongestSubstring(string));
