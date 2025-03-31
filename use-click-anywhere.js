import { useEffect } from "react";
export default function useClickAnywhere(handler) {
  useEffect(() => {
    if(typeof handler !== 'function') return;
    const handleClick = (event) => {
      handler(event);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handler]);
}
