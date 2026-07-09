import useToggle from "../hooks/useToggle";

export default function Toggle(){
    const [value, toggle, setValue] = useToggle();
    

    return (
        <div>
        <p>Enabled: {value ? 'On' : 'Off'}</p>
        <button onClick={toggle}>Toggle</button>
        <button onClick={() => setValue(true)}>Enable</button>
        <button onClick={() => setValue(false)}>Disable</button>
        </div>
    );
}