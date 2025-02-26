Object.prototype.keysToUpperCase = function(){
    const result={}
    for(let keys in this){
        if(this.hasOwnProperty(keys)){
        result[keys.toUpperCase()] = this[keys];
        }
    }
    return result;
}
obj = { one: '1', two: '2', three: '3' }
invertobj = obj.keysToUpperCase()
console.log(invertobj)
