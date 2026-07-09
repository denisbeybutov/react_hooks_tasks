import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";

export default function ClickOutside (){
    const target = useRef(null);
    useClickOutside(target, () => console.log('Clicked outside'));

    return (
        <div>
        <div ref={target} style={{background:'grey'}}>Click outside me</div>
        <div>Maybe here?</div>
        </div>
    );
}