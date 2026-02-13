let initialGameBoard=[
    [null, null, null],
    [null, null, null],
    [null ,null, null]
]

export default function GameBoard({onSelectedPlayer, turns}){
    let gameBoard= initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        console.log(row+"-"+col+"="+player);
        gameBoard[row][col]=player;
    }
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
                {gameBoard.map((row, rowIndex) => ( <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=> onSelectedPlayer(rowIndex,colIndex)} >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>))}
            </ol>

    );
}