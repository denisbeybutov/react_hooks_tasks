import { useCallback, useState } from "react";

export default function useBoolean(){
    const [value, setValue] = useState(false)
    // function setTrue(){
    //     setValue(true)
    // }
    const setTrue = useCallback(()=> {
        setValue(true)
    },[])
    // function setFalse(){
    //     setValue(false)
    // }
    const setFalse = useCallback(()=>{
        setValue(false)
    },[])

    return {
        value,
        setTrue,
        setFalse
    }
}