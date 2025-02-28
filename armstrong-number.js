/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
    let cubes=0
    let originalNum=n
    let length=0
    while(originalNum>0){
        length+=1;
        originalNum=Math.floor(originalNum/10);
    }
    originalNum = n;
    while(originalNum>0){
        cubes+=((originalNum%10)**length)
        originalNum=Math.floor(originalNum/10);
    }
    console.log(n,cubes)
    return cubes===n;
};
