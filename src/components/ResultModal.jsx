import {forwardRef, useImperativeHandle, useRef} from "react";

/**
 * ResultModal component.
 * Renders a modal dialog displaying the result and target time.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.result - The result (e.g., "won" or "lost").
 * @param {number} props.targetTime - The target time in seconds.
 * @param {React.Ref} ref - A React ref object used to imperatively control the dialog.
 * @returns {React.ReactElement} - The rendered component.
 */
const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {

    const dialog = useRef();

    useImperativeHandle(
        ref,
        () => {
            return {
                open() {
                    dialog.current.showModal()
                }
            };
        },
    );


    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default ResultModal;