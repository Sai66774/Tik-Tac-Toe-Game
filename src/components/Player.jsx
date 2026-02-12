import { useState } from "react";

export function Player({name, symbol, isActive}){
    const [isEditing, setIsEditing]= useState(false);
    let buttonName="Edit";
    let playerName;
    const [dynamicName, setDynamicName]= useState(name);
    if(isEditing){
        buttonName="Save";
        playerName=(<input type="text" defaultValue={dynamicName} onChange={onNameChange}required/>)
    }else{
        buttonName='Edit';
        playerName=(<span className="player-name">{dynamicName}</span>);
    }

    function onEdit(){
        setIsEditing(edit=> !edit);
    }

    function onNameChange(event){
        console.log(event);
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