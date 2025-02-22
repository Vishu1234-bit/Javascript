function customPromiseAllSettled(promises){
    return Promise.all(promises.map(promise=>
    promise.then(results=>({status:'fulfilled',results}))
    .catch(error=>({status:'rejected',error}))))
}
const promise1 = Promise.resolve(3)
const promise2 = Promise.reject("Error")
const promise3 = new Promise((resolve)=>setTimeout(resolve,100,"foo"))
customPromiseAllSettled([promise1,promise2,promise3])
.then(results=>console.log(results))
.catch(error=>console.log(error))
