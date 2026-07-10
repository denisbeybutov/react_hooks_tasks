import useStep from "../hooks/useStep";

export default function Step(){
    const { step, next, previous, reset, setStep, hasNext, hasPrevious } =
    useStep(3);

  return (
    <div>
      <p>Step {step}</p>
      <button onClick={previous} disabled={!hasPrevious}>
        Previous
      </button>
      <button onClick={next} disabled={!hasNext}>
        Next
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setStep(3)}>Go to step 3</button>
    </div>
  );
}