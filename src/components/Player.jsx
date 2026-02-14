import { useState } from "react";

export function Player({name, symbol, isActive, onSaveName}){
    const [isEditing, setIsEditing]= useState(false);
    const [dynamicName, setDynamicName]= useState(name);
    let buttonName="Edit";
    let playerName;

    if(isEditing){
        buttonName="Save";
        playerName=(<input type="text" value={dynamicName} onChange={onNameChange} required/>)
    }else{
        buttonName='Edit';
        playerName=(<span className="player-name">{dynamicName}</span>);
    }

    function onEdit(){
        if(isEditing) onSaveName(symbol,dynamicName);
        setIsEditing(edit=> !edit);
    }

    function onNameChange(event){
        setDynamicName(event.target.value);
    }
    return (
        <>
            <li className={isActive ? 'active': undefined}>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={onEdit}>{buttonName}</button>
            </li>
        </>
    );
}