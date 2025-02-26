/**
 * @param {string} s
 * @return {boolean}
 */ 
var canPermutePalindrome = function(s) {
    const charCount = new Map();
    for(let char of s){
        charCount.set(char,(charCount.get(char)||0)+1);
    }
    let oddCount=0;
    for(let char of charCount.keys()){
        if(charCount.get(char)%2==1){
            oddCount++;
        }
        if(oddCount>1){
            return false;
        }
    }
    return true;
};
