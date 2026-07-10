import { useEffect, useRef, useState } from "react"

export default function useStateWithReset(initialValue){
    const ref = useRef(initialValue)

    const [value, setValue] = useState(initialValue)
    const resetValue = () => {
        setValue(ref.current)
    }
    
    return [value, setValue, resetValue]
}