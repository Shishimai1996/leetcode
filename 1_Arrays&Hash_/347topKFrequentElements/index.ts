function topKFrequent(nums: number[], k: number): number[] {
    const order = nums.sort((a,b)=> a-b)
    let result:{num:number, count: number}[] = []

    let count = 1 
    for(let i = 1; i <= order.length; i++){
        if(order[i]===order[i-1]){
count++
        }else{
            result.push({num: order[i-1], count: count})
            count = 1
        }
    }

    const orderResult = result.sort((a,b) => b.count - a.count)
return orderResult.slice(0,k).map(item => item.num)
};

// const numbersArray = [1,1,1,2,2,3]
// const k = 2
const numbersArray = [1]
const k = 1

console.log(topKFrequent(numbersArray,k))