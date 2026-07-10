import useStateWithReset from "../hooks/useStateWithReset";

export default function StateWithReset(){
    const [value, setValue, resetValue] = useStateWithReset(10);

    return (
        <div>
        <div>Value: {value}</div>
        <input onChange={(e) => setValue(e.target.value)} value={value}/>
        <button onClick={resetValue}>reset</button>
        </div>
    );
}