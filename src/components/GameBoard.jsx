

export default function GameBoard({onSelectedPlayer, board}){
    
    // const [gameBoard, setGameBoard]=useState(initialGameBoard);

    // function handledSelectSquare(rowIndex,colIndex){
    //     console.log(rowIndex+""+colIndex);
    //     setGameBoard((prevGameBoard) => {
    //         let updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         if(updatedBoard[rowIndex][colIndex] === null){
    //         updatedBoard[rowIndex][colIndex] = currentActPLayer;
    //         onSelectPlayer();
    //         }
    //         return updatedBoard;
    //     })
        
    // }
    return (
            <ol id="game-board">
                {board.map((row, rowIndex) => ( <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=> onSelectedPlayer(rowIndex,colIndex)} disabled={playerSymbol!== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>))}
            </ol>

    );
}