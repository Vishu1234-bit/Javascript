import {useState,useCallback} from "react"
export default function useCycle(...args) {
   const [index,setIndex] = useState(0);
   const cycle = useCallback(()=>{
    setIndex((prevIndex)=>(prevIndex+1)%args.length)
   },[args.length]);
   return [args[index],cycle];
}
