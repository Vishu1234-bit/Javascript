/**
 * @param number initialValue
 * @return Object
 */
import {useState,useCallback} from "react";
export default function useCounter(initialValue=0) {
   const [count,setCount] = useState(initialValue);
   const increment =useCallback(()=>{setCount((prevCount)=>prevCount+1)},[]);
   const decrement =useCallback(()=>{setCount((prevCount)=>prevCount-1)},[]);
   const reset =useCallback(()=>{setCount(initialValue)},[initialValue]);
   return {count, increment,decrement,reset,setCount};

}
