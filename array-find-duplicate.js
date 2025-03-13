/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function findDuplicates(numbers) {
  let frequency = new Set();
  for(let num of numbers){
    if(frequency.has(num)){
      return true;
    }
    frequency.add(num);
  }
  return false;
}
