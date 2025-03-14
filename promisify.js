/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
  return function(...args){
    return new Promise((resolve,reject)=>{
      func.call(this,...args,(err,result)=>{
        if(err){
          reject(err);
        }else{
          resolve(result)
        }

      })
    })
  }
}
