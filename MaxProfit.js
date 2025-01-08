const stock = [7,1,4,5,3,6,4];
// const MaxProfit = (prices) => {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             let profit = prices[j] - prices[i];
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;

// }
// console.log(MaxProfit(stock));  

// using for of loop 

const MaxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = Infinity;
    
    for (let price of prices) {
        // Update the minimum price so far
        minPrice = Math.min(minPrice, price);
        // Calculate the profit with the current price and update the max profit
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
};


console.log(MaxProfit(stock));  // Output: 5
