// function mySqrt(x: number): number {
//     const sqrt = Math.sqrt(x)
//     const result = Math.floor(sqrt)
//     return result
// };

// // const number = 4
// const number = 8
// console.log(mySqrt(number))

//0,1|2,3|4,5,6,7,8|9,10,11,12,13,14,15|16,17,18,19,20,21,22,23,24|25,26,27,28,29,30,31,32,33,34,35|36,37,38,39,40,41,42,43,44,45,46,47,48|49...
//    L   M   R　            ⚪︎
//    L M   R
//      L M R
//      L R
//     L&R
function mySqrt(x: number): number {
   if(x<2) 
    return x
   
let left = 2
let right = Math.floor(x/2)
   while(right >=left){
    const mid = left + Math.floor((right - left)/2)
    if(mid * mid === x) {
        return mid
    }else if(mid * mid <x){
left = mid + 1
    }else{
        right = mid -1
    }
   }
return right
};

// const number = 4
// const number = 8
const number = 26
console.log(mySqrt(number))


