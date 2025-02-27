function curry(fn){
    return function curried(...args){
        if(args.length>=fn.length){
            return fn.apply(this,args)
        }else{
            return function(...nextargs){
                return curried.apply(this,args.concat(nextargs))
            }
        }
    }
}
function add(a,b,c){
    return a+b+c
}
const curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3))
