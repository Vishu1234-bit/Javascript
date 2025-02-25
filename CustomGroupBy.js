Array.prototype.customGroupBy = function(callback){
    return this.reduce((acc,item)=>{
        const key = callback(item)
        if(!acc.key){
            acc[key]=[]
        }
        acc[key].push(item);
        return acc
    },{})
}
obj = [{'name':'Alice','age':24},{'name':'Bob','age':56},{'name':'Here','age':24}]
console.log(obj.customGroupBy((item)=>item.age))
