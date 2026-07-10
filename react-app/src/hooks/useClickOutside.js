import { useEffect } from "react"

export default function useClickOutside(target, callback){

    useEffect(()=>{
        const handler = e => {
            if(target.current && !target.current.contains(e.target)) callback()
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    },[target,callback])
    
}