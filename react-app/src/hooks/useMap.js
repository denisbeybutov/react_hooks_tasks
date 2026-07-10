import { useState } from "react"

export default function useMap(defaultValue){

    const [map, setMap] = useState(()=>new Map(defaultValue))
    
    const set = (key,value) => {
        let copiedMap = new Map(map)
        copiedMap.set(key,value)
        setMap(copiedMap)
    }
    const setAll = (entries) => {
        const newMap = new Map(entries)
        setMap(newMap)
    }
    const reset =()=>{
        setMap(new Map())
    }
    const remove =(key)=>{
        // const copiedMap = new Map(map)
        // copiedMap.delete(key)
        // setMap(copiedMap)
        setMap(prevMap => {
            const copiedMap = new Map(prevMap)
            copiedMap.delete(key)
            return copiedMap
        })
    }

    return {map, set, setAll, reset, remove }
}