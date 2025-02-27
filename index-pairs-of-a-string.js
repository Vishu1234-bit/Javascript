/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    let result=[];
    for(let i=0;i<words.length;i++){
        for(let j=0;j<text.length;j++){
            if(text[j]===words[i][0] && text.substring(j,j+words[i].length)===words[i]){
                result.push([j,j+words[i].length-1])
            }
        }
    }
    result.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0])
    return result;
};
