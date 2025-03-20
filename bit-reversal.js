/**
 * @param {number} n
 * @return {number}
 */
export default function bitReversal(n) {
  let ans = 0;
  for(let i=0;i<32;i++){
    ans = (ans<<1) | (n&1);
    n>>=1;
  }
  return ans>>>0;
}
