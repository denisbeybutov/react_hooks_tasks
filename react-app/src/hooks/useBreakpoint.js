import { useState,useEffect } from "react"

export default function createBreakpoint(breakpoints){
    
    return function useBreakpoint() {
        const getBreakpoint = (width) => {
            let currentBreakpoint = "";
      
            for (const [name, minWidth] of Object.entries(breakpoints)) {
              if (width >= minWidth) {
                currentBreakpoint = name;
              }
            }
      
            return currentBreakpoint;
          };
        
        const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth))
       
        useEffect(() => {
            function handleResize() {
                setBreakpoint(getBreakpoint(window.innerWidth));
            }
        
            window.addEventListener("resize", handleResize);
        
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);
        return breakpoint
        
    }
}