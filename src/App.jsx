import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import {Player} from './components/Player.jsx'
function App() {
  const [activePlayer, setactivePlayer] = useState("X");

  function handledSelectSquare(){
    setactivePlayer(currentActivePLayer=> currentActivePLayer === "X" ? "O": "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
        </ol>
        <GameBoard onSelectPlayer={handledSelectSquare}/>
      </div>
    </main>
  );
}

export default App
