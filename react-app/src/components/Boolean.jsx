import useBoolean from "../hooks/useBoolean";

export default function Boolean(){
  const { value, setTrue, setFalse } = useBoolean();
  function toggle(){
     value ? setFalse() : setTrue()
  }

  return (
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

