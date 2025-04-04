/**
 * @param {Array<Function>} functions
 * @param {number} ms
 * @return {Array<Function>}
 */
var delayAll = function(functions, ms) {
    return functions?.map(fn=>{
        return async()=>{
            await new Promise(resolve=>setTimeout(resolve,ms));
            try{
                const result = await fn();
                return Promise.resolve(result);
            }catch(error){
                return Promise.reject(error);
            }
        }
    });
};

