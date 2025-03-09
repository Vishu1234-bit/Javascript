/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args); // ✅ Ensures `this` is preserved
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs]); // ✅ Pass `this` along
      }.bind(this);
    }
  };
}

function add(a,b,c){
    return a+b+c
}
const curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3))
