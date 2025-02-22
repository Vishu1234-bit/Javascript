function throttle(fn,delay){
    let inThrottle;
    return function(...args){
        if(!inThrottle){
            fn(...args);
            inThrottle=true;
            setTimeout(()=>(inThrottle=false),delay)
        }
    }
}
const log = throttle(()=>console.log('Throttled'),1000)
window.addEventlistener('scroll',log)
