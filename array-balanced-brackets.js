/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  let pairBraces = {')':'(','}':'{',']':'['};
  let stack = []
  for(let braces of str){
    if(Object.values(pairBraces).includes(braces)){
      stack.push(braces)
    }else if(pairBraces.hasOwnProperty(braces)){
      if(stack.length===0 || stack.pop()!==pairBraces[braces]){
        return false;
      }
    }
  }
  return !stack.length;
}
