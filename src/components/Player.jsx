import {useState, useRef} from "react";

/**
 * Represents a player.
 *
 * This component is responsible for displaying the player section and allowing the user to set their name.
 *
 * @returns {JSX.Element} The player section with name input and set name button.
 */
export default function Player() {

    const playerName = useRef();
    const [enteredName, setEnteredName] = useState(null);

    function handleClick() {
        setEnteredName(playerName.current.value);
        playerName.current.value = '';
    }

    return (
        <section id="player">
            <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
