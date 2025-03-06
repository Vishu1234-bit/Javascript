/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export default function cycle(...values) {
   let initialIndex=0;
   return function(){
     const res = values[(initialIndex%values.length)];
     initialIndex+=1;
     return res;
   }
}
