/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  if(!array || array.length==0){
    return undefined
  }
  let minVal;
  let miniteratee; 
  for(let i=0;i<array.length;i++){
    const currValue = iteratee(array[i])
    if(currValue===undefined || Number.isNaN(currValue)){
    continue;
  }
     if(miniteratee===undefined||currValue<miniteratee){
        miniteratee = currValue;
        minVal = array[i]
     }
  }
  return minVal;
}
