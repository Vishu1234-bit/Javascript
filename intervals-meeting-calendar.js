/**
 * @param {number[][]} numbers
 * @return {boolean}
 */
export default function isMeetingCalendarValid(intervals) {
  intervals.sort((a,b)=>a[0]-b[0]);
  let n =intervals.length;
  for(let index=0;index<n-1;index++){
    if(intervals[index][1]>intervals[index+1][0]){
      return false;
    }
  }
  return true;
}
