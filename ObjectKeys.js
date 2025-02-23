function customKeys(obj){
    const keys =[];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            keys.push(key)
        }
    }
    return keys
}
const person = {
    name: 'Anikha',
    age:30,
    city:'NY'
}
console.log(customKeys(person))
