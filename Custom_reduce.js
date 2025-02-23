Array.prototype.customReduce = function(callback,initialValue){
    let accumulator = initialValue===undefined?this[i]:0;
    const startIndex = initialValue===undefined?1:0
    for(let i=startIndex;i<this.length;i++){
        accumulator = callback(accumulator,this[i],i,this)
    }
    return accumulator
}
const arr1 = [4,5,3,2,1]
const mappedarr1 = arr1.customReduce((acc,val)=>acc+val,0)
console.log(mappedarr1)
