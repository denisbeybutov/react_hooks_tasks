import { useEffect, useRef, useState } from "react"

export default function useCountdown ({ countStart: initial }) {
    const [count, setCount] = useState(initial);
    const ref = useRef(null)
    const start = () => {
        if(ref.current) return
        ref.current = setInterval(() => {
            setCount(prev => {
                if(prev-1 < 0) {
                    clearInterval(ref.current)
                    ref.current = null
                    return 0
                }
                return prev - 1
            })
        }, 1000);
        
    }
    const stop = () => {
        if(!ref.current) return
        clearInterval(ref.current)
        ref.current = null
    }
    const reset = () => {
        if(ref.current) {
            clearInterval(ref.current)
            ref.current = null
        }
        
        setCount(initial)
        
    }

    useEffect(()=> {
        return ()=> {
            stop()
        }
    },[])

    return { count, start, stop, reset }
}