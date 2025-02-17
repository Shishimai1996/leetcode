function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

// const haystack = "sadbutsad";
// const needle = "sad";
const haystack = "leetcode";
const needle = "leeto";
console.log(strStr(haystack, needle));
