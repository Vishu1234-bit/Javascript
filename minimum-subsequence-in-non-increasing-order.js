/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b)=>b-a);
    const sumOfAllArr = nums.reduce((acc,val)=>acc+val,0);
    let result=[];
    let seqSum = 0;
    for(let i=0;i<nums.length;i++){
        seqSum+=nums[i];
        result.push(nums[i]);
        if(seqSum>sumOfAllArr/2){
            break;
        }
    }
    return result;
};
