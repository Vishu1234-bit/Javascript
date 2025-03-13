/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export default function isStringAnagram(str1, str2) {
  if(str1.length!==str2.length){
    return false;
  }
  let charCount= new Map();
  for(let char of str1){
    charCount[char] = (charCount[char]||0)+1;
  }
  for(let char of str2){
    if(charCount[char]===0 || !charCount[char]){
      return false;
    }
    charCount[char] = (charCount[char]||0)-1;
  }
  return true;
}
