function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(clean);
  let right = clean.length - 1;
  let left = 0;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }

    right--;
    left++;
  }

  return true;
}

// const phrase = "A man, a plan, a canal: Panama";
// const phrase = "race a car";
// const phrase = "";
const phrase = "0P";

console.log(isPalindrome(phrase));
