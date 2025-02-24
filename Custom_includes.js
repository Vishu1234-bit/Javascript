Array.prototype.customIncludes = function(value){
    for(let i=0;i<this.length;i++){
        if(this[i]===value){
            return true;
        }
    }
    return false;
}
const arr = [9,5,4,3,5]
console.log(arr.customIncludes(9))
