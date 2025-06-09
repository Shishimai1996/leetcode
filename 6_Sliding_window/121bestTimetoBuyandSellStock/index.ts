// function maxProfit(prices: number[]): number {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       //7<infi->1<7->5<1->3<1->6<1->4<1
//       minPrice = prices[i];
//       //7->1->
//     } else {
//       maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//       //0or5-1=4->4or3-1=2->4or6-1=5->6or4-1=3
//     }
//   }
//   return maxProfit;
// }

// const prices = [7, 1, 5, 3, 6, 4];

// console.log(maxProfit(prices));

function maxProfit(prices: number[]): number {
  let maxDifference = 0;
  let min = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
    } else {
      const difference = prices[i] - prices[min];
      maxDifference = Math.max(maxDifference, difference);
    }
  }
  return maxDifference;
}
const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
