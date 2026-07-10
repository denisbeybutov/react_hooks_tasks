import useObject from "../hooks/useObject";

export default function Object(){
    const [record, setRecord] = useObject({ a: 1, b: 2 });

    return (
        <div>
        <pre>{JSON.stringify(record, null, 2)}</pre>
        <button onClick={() => setRecord((prev) => ({ a: prev.a + 1 }))}>
            Increase a
        </button>
        <button onClick={() => setRecord((prev) => ({ b: prev.b + 1 }))}>
            Increase b
        </button>
        <button onClick={() => setRecord(() => ({ c: 3 }))}>Add c</button>
        </div>
    );
}