//1 => 1
//2 => 1+1, 2
//3 => 1+1+1, 1+2, 2+1
//4 => 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2
//5 => 1+1+1+1+1, 2+1+1+1, 1+2+1+1, 1+1+2+1, 1+1+1+2, 2+2+1, 2+1+2, 1+2+2
//6 => 1+1+1+1+1+1, 2+1+1+1+1, 1+2+1+1+1, 1+1+2+1+1, 1+1+1+2+1, 1+1+1+1+2, 2+2+1+1, 2+1+2+1, 2+1+1+2, 1+2+1+2, 1+1+2+2, 2+2+2

function climbStairs(n: number): number {
if(n <= 2){
    return n
}else{
    const result = (n-2)+(n-1)+1
    return result
}

};

// const n = 2
const n = 6
console.log(climbStairs(n))