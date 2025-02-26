Object.prototype.invert = function(){
    const result={}
    for(let keys in this){
        if(this.hasOwnProperty(keys)){
        result[this[keys]] = keys;
        }
    }
    return result;
}
obj = {1:'one',2:'two',3:'three'}
invertobj = obj.invert()
console.log(invertobj)
