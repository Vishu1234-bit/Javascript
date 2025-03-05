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
,................. With proper all test cases
    /**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if(initialValue===undefined && this.length===0){
    throw new TypeError("Reduce of empty array with no initial value");
  }
     let accumulator = initialValue===undefined?this[0]:typeof this[0]==='string'?'':0;
     let startIndex = initialValue===undefined?1:0;
     for(let i=startIndex;i<this?.length;i++){
      if(this[i]){
      accumulator=callbackFn(accumulator,this[i],i,this)
      }
     }
     return accumulator;
};
