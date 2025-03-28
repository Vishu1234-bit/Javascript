/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result=[];
    arr?.forEach((ele)=>{
    if(Array.isArray(ele) && n>0){
        result.push(...flat(ele,n-1));
    }
    else{
        result.push(ele);
    }
    })
return result;
}
