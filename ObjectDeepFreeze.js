Object.prototype.deepFreeze = function(){
    Object.freeze(this);
    for(let key in this){
        if(typeof this[key]==='object' && !Object.isFrozen(this[key])){
            this[key].deepFreeze();
        }
    }
    return this;
}
obj = { one: '1', two: '2', three: '3' }
obj.deepFreeze()
obj['two'] = 4;
console.log(obj)
