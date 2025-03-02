/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
     if(typeof this !== 'function'){
      throw new TypeError("mycall only be used on functions");
     }
     thisArg=thisArg||globalThis;
     const uniqueKey = Symbol();
     thisArg[uniqueKey] = this;
     const result = thisArg[uniqueKey](...argArray);
     delete thisArg[uniqueKey];
     return result;
};
