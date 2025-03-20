/**
 * @param {number} n
 * @return {number[]}
 */
export default function bitCounting(n) {
  let res = [];
  for(let i=0;i<=n;i++){
    var currNum = i;
    var countOf1bit =0;
    while(currNum){
      countOf1bit+=(currNum%2);
      currNum=parseInt(currNum/2);
    }
    res.push(countOf1bit);
  }
  return res;
}
