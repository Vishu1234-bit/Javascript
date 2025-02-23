Array.prototype.customFilter = function(callback){
    const result = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result
}
const arr1 = [4,5,3,2,1]
const mappedarr1 = arr1.customFilter(ele=>ele%2==0)
console.log(mappedarr1)
