Object.prototype.clone = function(){
    return JSON.parse(JSON.stringify(obj2))
}

obj2 = {'city':'NY','isElder':true}
const obj2copy = obj2.clone()
obj2copy.isElder = false;
console.log(obj2copy);
console.log(obj2);
