/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
  const frequency = {};
  for(let i=0;i<array.length;i++){
    const num = iteratee(array[i]);
    if(!(num in frequency)){
      frequency[num] = 1;
    }else{
      frequency[num]+=1;
    }
  }
  return frequency;
}
