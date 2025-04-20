//bubble sort
//[1,3,7,4,2]
//[1,3,4,2,|7]
//[1,3,2,|4,7]
//[1,2,|3,4,7]
//[1,|2,3,4,7]

//1+2+3+4+....+100 = ?
//1+100 = 101
//2+99 = 101
//3+98 = 101
//...
//50+51 = 101
//101 * 50 = 5050
//(n+1) * n/2
//(n^2 + n)/2
//0(n^2)

function bubble_sort(arr: number[]):void{
for(let i = 0; i < arr.length; i++){//arr.length -1 times need to run because first loop just move the biggest one to the last.
    for(let j = 0; j < arr.length - 1 - i; ++j){ //swap if the bigger number is on the left.
        if(arr[j] > arr[j+1]){
            const tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
        }
    }
}

}

const arr = [1,3,7,2,4]
bubble_sort(arr)
console.log(arr)