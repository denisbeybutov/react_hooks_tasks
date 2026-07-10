import { useState } from "react"

export default function useStep(maxStep){
    const [step, setStep] = useState(1);    

    const next =() => {
        setStep(prev => {
            if(prev+1 > maxStep) return prev            
            return prev + 1;
        })
    }
    const previous = () => {
        setStep(prev => {
            if(prev - 1 < 1) return prev            
            return prev - 1; 
        })
    }

    const reset = () => {
        setStep(1)                
    }

    function goToStep (count) {
        setStep(Math.min(Math.max(count, 1), maxStep))
    }


    return { step,
        next,
        previous,
        reset,
        setStep: goToStep,
        hasNext: step < maxStep,
        hasPrevious: step > 1 } 
}