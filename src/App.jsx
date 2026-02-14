import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import {Player} from './components/Player.jsx';
import Log from './components/Logs.jsx';
import { WINNING_COMBINATIONS } from './WinningCombo.js';
import GameOver from './components/GameOver.jsx';

let initialGameBoard=[
    [null, null, null],
    [null, null, null],
    [null ,null, null]
]

function App() {
  const [gameLog, setGameLog] = useState([]);
  // const [activePlayer, setactivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameLog);
  let gameBoard = selectedSquaresLogic(gameLog);
  let winner;
  let hasDraw= gameLog.length === 9 && !winner;

  for(const combo of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combo[0].row][combo[0].column];
    const secondSquareSymbol=gameBoard[combo[1].row][combo[1].column];
    const thirdSquareSymbol=gameBoard[combo[2].row][combo[2].column];
    
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner= firstSquareSymbol;
    }
  }

  function handledSelectSquare(rowIndex, colIndex) {
    setGameLog((prevTurns) => {
      const currentPlayer = deriveActivePlayer(gameLog);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
    console.log(rowIndex + "" + colIndex);
  }

  function rematach(){
    console.log("Restarted the game");
    winner=undefined;
    hasDraw=false;
    setGameLog([]);
    
  }

  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} callRematch={rematach}/>}
        <GameBoard onSelectedPlayer={handledSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameLog}/>
    </main>
  );
}

function selectedSquaresLogic(gameLog){
  let game=[...initialGameBoard.map(array=>[...array])];
  for (const turn of gameLog) {
    const { square, player } = turn;
    const { row, col } = square;
    console.log(row + "-" + col + "=" + player);
    game[row][col] = player;
  }
  return game;
}

function deriveActivePlayer(gameLog){
  let currentPlayer ='X';

  if(gameLog.length>0 && gameLog[0].player === 'X'){
    currentPlayer='O';
  }
  return currentPlayer;
}



export default App
