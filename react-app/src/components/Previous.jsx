import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function Previous(){
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    return (
        <div>
        <p>current: {count}</p>
        <p>previous: {previousCount}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        </div>
    );
}