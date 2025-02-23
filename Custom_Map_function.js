Array.prototype.customMap = function(callback){
    const result = []
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }
    return result
}
const arr1 = [4,5,3,2,1]
const mappedarr1 = arr1.customMap(ele=>ele*2)
console.log(mappedarr1)
