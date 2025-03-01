/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map= new Map();
    let invertedMap = new Map();
    let slist = s.split(' ');
    if(pattern?.length!==slist?.length){
        return false;
    }
    for(let index=0;index<slist?.length;index++){
        if(!map.has(slist[index]) && !invertedMap.has(pattern[index])){
        map.set(slist[index],pattern[index]);
        invertedMap.set(pattern[index],slist[index]);
        console.log(map,invertedMap);
        }
    }
    console.log(map,invertedMap);
    for(let checkIndex = 0 ;checkIndex<slist.length; checkIndex++){
        if(pattern[checkIndex]!=map.get(slist[checkIndex])){
            return false;
        }
    }
    return true;
};
