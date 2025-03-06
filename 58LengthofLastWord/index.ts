function lengthOfLastWord(s: string): number {
  const array = s.trim().split(" ").filter(Boolean); // Remove extra spaces
  const result = array[array.length - 1]; // Get last word
  return result.length; // Return length of last word
}

// const s = "Hello World";
// const s = "   fly me   to   the moon  ";
const s = "luffy is still joyboy";

console.log(lengthOfLastWord(s));
