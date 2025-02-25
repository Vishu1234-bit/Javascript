Array.prototype.customFlat = function(){
    let result = []
    this.forEach(item=>{
        if(Array.isArray(item)){
            result.push(...item)
        }else{
            result.push(item)
        }
    }
    )
    return result;
}
const age = [18,[3,2,56],12,[90,[8]]]
console.log(age.customFlat())
