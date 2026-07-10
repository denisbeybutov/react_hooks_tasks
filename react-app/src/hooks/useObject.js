import { useState } from "react"

export default function useObject(initialValue){
    const [data, setData] = useState(initialValue)
    function setRecord(option){
        setData(prevData => {
            const newData = typeof option === 'function'
                ? option(prevData)
                : option

            return {
                ...prevData,
                ...newData
            }
        })
    }
    

    return [data, setRecord]
}