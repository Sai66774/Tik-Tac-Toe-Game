import { useState } from "react";

const initialGameBoard=[
    [null, null, null],
    [null, null, null],
    [null ,null, null]
]

export default function GameBoard({onSelectPlayer}){
    const [gameBoard, setGameBoard]=useState(initialGameBoard);

    function handledSelectSquare(rowIndex,colIndex){
        console.log(rowIndex+""+colIndex);
        setGameBoard((prevGameBoard) => {
            let updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        })
    }
    onSelectPlayer();
    return (
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => ( <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handledSelectSquare(rowIndex, colIndex)} >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>))}
            </ol>

    );
}