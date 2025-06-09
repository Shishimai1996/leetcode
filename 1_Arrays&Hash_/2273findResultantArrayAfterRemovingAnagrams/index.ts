function removeAnagrams(words: string[]): string[] {
  let i = 1;
  while (i < words.length) {
    const prev = words[i - 1].split("").sort().join("");
    const current = words[i].split("").sort().join("");

    if (prev === current) {
      words.splice(i, 1);
    } else {
      i++;
    }
  }
  return words;
}

const words = ["abba", "baba", "bbaa", "cd", "cd"];

console.log(removeAnagrams(words));
