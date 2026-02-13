import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import {Player} from './components/Player.jsx';
import Log from './components/Logs.jsx';
function App() {
  const [gameLog,setGameLog]= useState([]);
  const [activePlayer, setactivePlayer] = useState("X");

  function handledSelectSquare(rowIndex, colIndex) {
  setactivePlayer(currentActivePLayer => {
    const nextPlayer = currentActivePLayer === "X" ? "O" : "X";

    setGameLog((prevTurns) => {
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentActivePLayer, 
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
    return nextPlayer;
  });
  console.log(rowIndex + "" + colIndex);
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
        <GameBoard onSelectedPlayer={handledSelectSquare} turns={gameLog}/>
      </div>
      <Log turns={gameLog}/>
    </main>
  );
}

export default App
