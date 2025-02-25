Array.prototype.customEvery = function(callback){
    for(let i=0;i<this.length;i++){
        if(!callback(this[i],i,this)){
            return false;
        }
    }
    return true;
}
const age = [18,3,2,56,12]
console.log(age.customEvery(item =>age>15))
