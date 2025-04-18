/**
 * @param {Array<number>} arr
 * @param {number} startIndex
 * @yields {number}
 */
var cycleGenerator = function* (arr, startIndex) {
    while(true){
        let nextstep=yield arr[startIndex];
        if(typeof nextstep!="number" || isNaN(nextstep)){
            nextstep=0;
        }
        startIndex=(startIndex+nextstep)%arr.length;
        if(startIndex<0){
            startIndex+=arr.length;
        }
    }
    
};

/**
 *  const gen = cycleGenerator([1,2,3,4,5], 0);
 *  gen.next().value  // 1
 *  gen.next(1).value // 2
 *  gen.next(2).value // 4
 *  gen.next(6).value // 5
 */
