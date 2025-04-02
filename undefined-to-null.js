/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var undefinedToNull = function(obj) {
    for(let key in obj){
        if(Array.isArray(obj[key]) || (typeof obj[key]=="object" && obj[key]!=null)){
            undefinedToNull(obj[key]);
        }
        if(obj[key]==undefined){
            obj[key]=null;
        }
    }
    return obj
};

/**
 * undefinedToNull({"a": undefined, "b": 3}) // {"a": null, "b": 3}
 * undefinedToNull([undefined, undefined]) // [null, null] 
 */
