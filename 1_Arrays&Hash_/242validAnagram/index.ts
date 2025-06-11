// function isAnagram(s: string, t: string): boolean {
//     if(s.length !== t.length) return false

//     let tArray = t.split('')

//     for(let i = 0; i<s.length; i++){
//         const index = tArray.indexOf(s[i])
//         if(index !== -1){
//             tArray.splice(index,1)
//         }else{
//             return false
//         }
//     }
//     return tArray.length === 0

// };

// // const sLetter = "anagram"
// // const tLetter = "nagaram"
// const sLetter = "rat"
// const tLetter = "car"

// console.log(isAnagram(sLetter,tLetter))

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sSort = s.split("").sort().join("");
  const tSort = t.split("").sort().join("");

  return sSort === tSort;
}

const sLetter = "anagram";
const tLetter = "nagaram";
// const sLetter = "rat"
// const tLetter = "car"

console.log(isAnagram(sLetter, tLetter));

// function isAnagram(s: string, t: string): boolean {
//     if(s.length !== t.length) return false
// return s.split('').sort().join('') === t.split('').sort().join('')
// };

// // const sLetter = "anagram"
// // const tLetter = "nagaram"
// const sLetter = "rat"
// const tLetter = "car"

// console.log(isAnagram(sLetter,tLetter))
