import useThrottle from "../hooks/useThrottle";
import { useState } from "react";

export default function Throttle(){
    const [position, setPosition] = useState([0, 0]);
    const throttledPosition = useThrottle(position, 1000);

    return (
        <div 
            onMouseMove={(e) => setPosition([e.clientY, e.clientX])}
            style={{
                width: '100vw',
                height: '100vh',
                background: 'grey'
              }}>

        
        <div
        style={{
            position: 'fixed',
            top: throttledPosition[0],
            left: throttledPosition[1],
            width:50,
            height: 50,
            background:'red'
        }}
        
        />
        </div>
    );
}