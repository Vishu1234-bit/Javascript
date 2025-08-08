function maxMeetings(intervals){
    intervals.sort((a,b) => a[1]-b[1]);
    let count=0;
    let last = -1;
    for(let [start,end] of intervals){
        if(start>=last){
            count+=1;
            last = end;
        }
    }
    return count;
}
console.log(maxMeetings([[1,2],[3,4],[0,6],[5,7],[8,9],[5,9]]))
