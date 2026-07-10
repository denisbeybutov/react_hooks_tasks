import { useEffect, useRef, useState } from "react";

export default function usePrevious(count){
    const ref = useRef();
    const previous = ref.current;
    
    useEffect(()=>{
        ref.current = count
    },[count])
    
    return previous;
}