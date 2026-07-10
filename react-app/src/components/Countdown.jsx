import useCountdown from "../hooks/useCountdown";

export default function Countdown(){
    const { count, start, stop, reset } = useCountdown({ countStart: 10 });

    return (
        <div>
        <p>Countdown: {count}</p>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}