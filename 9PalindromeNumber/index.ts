function isPalindrome(x: number): boolean {
  const wayAround = x.toString().split("").reverse().join("");
  if (wayAround === x.toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
