/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function(times) {
    let str='';
    for(let i=0;i<times;i++){
        str=str+this
    };
    return str;
}
