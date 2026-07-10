import { useEffect } from "react"

export default function useEventListener(event,
    callback,
    targetRef,
    options
){
    useEffect(()=>{
        const target = targetRef?.current || window
        target.addEventListener(event, callback, options)

        return ()=> {
            target.removeEventListener(event, callback, options)
        }
    },[event, callback, targetRef, options])
    
}