import useEventListener from "../hooks/useEventListener";
import { useRef } from "react";

export default function EventListener() {
    const buttonRef = useRef(null);

    useEventListener('click',
         () => console.log('Button clicked'), 
         buttonRef, 
         { once: true,});

    return (
        <div>
        <button ref={buttonRef}>Click me</button>
        </div>
    );
}