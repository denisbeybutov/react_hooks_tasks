import { Fragment } from "react";
import useMap from "../hooks/useMap";

export default function Map(){
    const { map, set, setAll, reset, remove } = useMap([['key', '🆕']]);

  return (
    <div>
      <button onClick={() => set(String(Date.now()), '📦')}>Add</button>
      <button
        onClick={() =>
          setAll([
            ['hello', '👋'],
            ['data', '📦'],
          ])
        }>
        Set new data (setAll)
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={()=>remove('hello')} disabled={!map.get('hello')}>
        Remove "hello"
      </button>
      <pre>
        Map (
        {Array.from(map.entries()).map(([key, value]) => (
            <Fragment key={key}>
                {`\n  ${key}: ${value}`}
            </Fragment>
        ))}
        <br />)
      </pre>
    </div>
  );
}