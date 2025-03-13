/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let lastCallTime=null;
    let timeoutId = null;
    let lastArgs = null;
    return function(...args) {
        const now = Date.now(); 
        if(lastCallTime===null){
            fn(...args);
            lastCallTime = now;
          }else{
            lastArgs = args
            if(!timeoutId){
                timeoutId = setTimeout(()=>{
                    fn(...lastArgs);
                    lastCallTime = Date.now();
                    timeoutId = null
                },t-(now-lastCallTime));
            }
          }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
