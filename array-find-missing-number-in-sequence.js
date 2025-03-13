/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
   for(let i=0;i<=numbers.length;i++){
    if(numbers.includes(i)){
      continue;
    }
    else{
      return i
    }
   }
}
