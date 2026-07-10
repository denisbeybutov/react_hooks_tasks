import { useEffect } from "react";

export default function useKeyPress(type, callback){
    
    useEffect(()=>{
        function handler(e){
            if(e.key === type) callback(e)
        }
        document.addEventListener('keydown',handler)
        return ()=> {
            document.removeEventListener('keydown',handler)
        }
    },[type,callback])
}