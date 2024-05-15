import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

/**
 * TimerChallenge - A component that displays a timer challenge.
 *
 * @param {Object} props - The props object containing the title and targetTime.
 * @param {string} props.title - The title of the challenge.
 * @param {number} props.targetTime - The duration of the challenge in seconds.
 *
 * @return {JSX.Element} The TimerChallenge component.
 */
export default function TimerChallenge({title, targetTime}) {

    const timer = useRef(0);
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart() {

        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
        }, 10);

    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}