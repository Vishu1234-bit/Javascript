/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr) {
  for(let j=1; j<arr.length;j++){
    for(let i=0; i<j;i++){
      if(arr[j]<arr[i]){
        [arr[i],arr[j]] = [arr[j],arr[i]];
      }
    }
  }
  return arr;
}
