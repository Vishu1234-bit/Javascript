Array.prototype.customSort = function(callback){
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length-1;j++){
            if(callback(this[j],this[j+1])>0){
                let temp = this[j];
                this[j]=this[j+1];
                this[j+1]=temp
            }
        }
    }
    return this
}
arr = [40,30,20,50,10]
console.log(arr.customSort((a,b)=>a-b))
