Object.prototype.getKeysByValue = function(value){
    return Object.keys(this).filter(key=>this[key]===value);
}
obj = { one: '1', two: '2', three: '3' }
const result = obj.getKeysByValue('1')
console.log(result)
