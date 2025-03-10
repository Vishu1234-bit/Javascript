/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timeout;
  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(()=>func.apply(this,args),wait);
  }
}
