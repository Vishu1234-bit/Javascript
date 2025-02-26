Object.prototype.isEmpty = function(){
    return Object.keys(this).length===0;
}
obj1 = {}
obj2 = {'city':'NY','isElder':true}
console.log(obj1.isEmpty());
console.log(obj2.isEmpty());
