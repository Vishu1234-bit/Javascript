/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(this.length!==(rowsCount*colsCount)){
        return [];
    }
    else{
        let snailMatrix = Array.from({length:rowsCount},()=>new Array(colsCount).fill(0));
        let currentNumIndex = 0;
        let row=0;
        let col=0;
        let down=true;
        while(currentNumIndex<this.length){
            snailMatrix[row][col] = this[currentNumIndex]
            if(down){
                if(row+1<rowsCount){
                    row++;
                }else{
                    col++;
                    down=false
                }
            }else{
                if(row-1>=0){
                    row--;
                }else{
                    col++;
                    down=true;
                }
            }
            currentNumIndex+=1
        }
        return snailMatrix;
    }
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
