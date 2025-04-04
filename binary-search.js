/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
export default function binarySearch(arr, target) {
  let low=0;
  let high =arr.length-1 ;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid]==target){
      return mid;
    }else if(arr[mid]>target){
      high=mid-1;
    }else{
      low = mid+1;
    }
  }
  return -1;
}
