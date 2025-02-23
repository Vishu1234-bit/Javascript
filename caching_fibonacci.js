function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key)
        }
        const result = fn(...args)
        cache.set(key,result)
        return result
    }
}
const fibonacci = memoize(function(n){
    if(n<=1) return n;
    return fibonacci(n-1)+fibonacci(n-2)
});
console.log(fibonacci(40))
