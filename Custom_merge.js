Object.prototype.merge = function(obj){
    let result = {...this};
    for(let key in obj){
        result[key] = obj[key];
    }
    return result;
}
obj1 = {'name':'friend','age':89}
obj2 = {'city':'NY','isElder':true}
const merged = obj1.merge(obj2)
console.log(merged)
