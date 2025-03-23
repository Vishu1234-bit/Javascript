/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    count=0;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            count+=1
        }
    }
    return count==0;
};
