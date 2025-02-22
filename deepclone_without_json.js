function deepClone(obj){
    console.log(obj)
    if(obj==null || typeof obj !== 'object'){
        return obj
    }
    if(obj instanceof Date){
        return new Date(obj.getTime())
    }
    if(Array.isArray(obj)){
        return obj.map(item=>deepClone(item))
    }
    const clonedObj={}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = deepClone(obj[key])
        }
    }
    return clonedObj
}
const obj = {name:"John",age:98,address:{city:"New york"}}
const clonedObj = deepClone(obj)
clonedObj.address.city = "Chennai"
console.log(clonedObj)
