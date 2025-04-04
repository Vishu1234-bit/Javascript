/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map();
    for(const obj of arr1){
        map.set(obj.id,{...obj})
    }
    for(const obj of arr2){
        if(map.has(obj.id)){
            let mergedObj = deepMerge(map.get(obj.id),obj)
            map.set(obj.id,mergedObj);
        }else{
            map.set(obj.id,{...obj});
        }
    }
    return Array.from(map.values()).sort((a,b)=>a.id-b.id);
};
function deepMerge(obj1,obj2){
    let result = {...obj1};
    for(let key in obj2){
            result[key]=obj2[key];
    }
    return result
}
