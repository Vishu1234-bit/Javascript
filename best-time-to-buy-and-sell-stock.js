/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2) return 0;
    let minPrice = prices[0]
    let maxProfit = 0
    for(let index=0;index<prices.length;index++){
        maxProfit = Math.max(prices[index]-minPrice,maxProfit)
        minPrice = Math.min(prices[index],minPrice)
    }
    return maxProfit>0?maxProfit:0
};
