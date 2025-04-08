function observePush(arr,callback){
    return new Proxy(arr,{
        get(target,prop){
            if(prop === "push"){
                return function(...args){
                    const res = Array.prototype.push.apply(target,args);
                    callback(args,target);
                    return res;
                }
            }
        }
    })
    return Reflect.get(target,prop)
}
const myArr = observePush([],(arr,updatedArr)=>{
    console.log("arr",arr);
    console.log("updatedArr",updatedArr);
});
myArr.push(1,2)
myArr.push(3)
