import { useState } from "react";
import "./Player.css"

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function EditName() {
        setIsEditing((isEditing) => !isEditing); //schedule a function to change the state but doesn't edits immediately
    }

    function changeName(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span>
                    : <input type="text" value={playerName} required  onChange={changeName}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={EditName}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}