/**
 * @param {string} start
 * @param {string} end
 * @param {number} step
 * @yields {string}
 */
var dateRangeGenerator = function* (start, end, step) {
    const mapMonths = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
    let startYear = parseInt(start.substring(0,4));
    let startMonth = parseInt(start.substring(5,7));
    let startDate = parseInt(start.substring(8,10));
    let endYear = parseInt(end.substring(0,4));
    let endMonth = parseInt(end.substring(5,7));
    let endDate = parseInt(end.substring(8,10));
    function isLeapYear(year){
        return (year%4===0 && year%100!==0) || year%400===0
    }
    if(isLeapYear(startYear)){
        mapMonths[2]=29;
    }
    while(startYear<endYear||
    (startYear===endYear && startMonth<endMonth)||
    (startYear===endYear && startMonth===endMonth && startDate<=endDate)){
        yield `${startYear}-${String(startMonth).padStart(2,'0')}-${String(startDate).padStart(2,'0')}`
        startDate+=step
        while(startDate>mapMonths[startMonth]){
            startDate-=mapMonths[startMonth]
            startMonth+=1
        if(startMonth>12){
            startMonth=1
            startYear+=1
            if(isLeapYear(startYear)){
                mapMonths[2]=29;
            }else{
                mapMonths[2]=28;
            }
        }
        }
    }
}
;

/**
 * const g = dateRangeGenerator('2023-04-01', '2023-04-04', 1);
 * g.next().value; // '2023-04-01'
 * g.next().value; // '2023-04-02'
 * g.next().value; // '2023-04-03'
 * g.next().value; // '2023-04-04'
 * g.next().done; // true
 */
