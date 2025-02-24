Array.prototype.customFind = function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return this[i];
        }
    }
}
const arr = [9,5,4,3,5]
console.log(arr.customFind(i=>i>5))
