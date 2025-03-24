/** 
 * @return {string}
 */
Date.prototype.nextDay = function() {
    const nextDate = new Date(this);
    nextDate.setDate(nextDate.getDate()+1);
    const year = nextDate.getFullYear();
    const month = String(nextDate.getMonth()+1).padStart(2,"0");
    const date = String(nextDate.getDate()).padStart(2,"0");
    return `${year}-${month}-${date}`
}

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */
