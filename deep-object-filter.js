/**
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Object|Array|undefined}
 */
var deepFilter = function(obj, fn) {
   if(Array.isArray(obj)){
    var filteredValues = obj.map((item)=>deepFilter(item,fn)).filter(item=>item!==undefined)
    return filteredValues?.length ? filteredValues : undefined
   }else if(obj!==null && typeof obj === 'object'){
    var filteredObject = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let filteredVal = deepFilter(obj[key],fn);
            if(filteredVal!==undefined){
                filteredObject[key] = filteredVal;
            }
        }
    }
     return Object.keys(filteredObject).length?filteredObject:undefined;
   }
   else{
    return fn(obj)?obj:undefined;
   }
};
