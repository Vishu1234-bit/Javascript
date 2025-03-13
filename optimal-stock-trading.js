/**
 * @param {number[]} prices
 * @return {number}
 */
export default function optimalStockTrading(prices) {
  let maxProfit=0;
  let buyprice=prices[0];
  for(let index in prices){
    if(prices[index]<buyprice){
      buyprice=prices[index];
    }
    maxProfit = Math.max(maxProfit,prices[index]-buyprice);
  }
  return maxProfit;
}
