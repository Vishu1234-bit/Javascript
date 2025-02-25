Array.prototype.customZip = function(arr){
    const minLen = Math.min(this.length,arr.length);
    let result=[];
    for(let i=0;i<minLen;i++){
        result.push([this[i],arr[i]])
    }
    return result;
}
arr = [40,30,20,50,10]
arr2 = [5,4,32,6,7,6]
console.log(arr.customZip(arr2))
