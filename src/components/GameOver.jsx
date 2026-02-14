export default function GameOver({winner,callRematch}){
    return(
        <div id="game-over">
            <h2>Game over!</h2>
            {winner && <p>{winner} won</p> }
            {!winner && <p>match is Draw</p>}
            <p>
                <button onClick={()=>callRematch()}>Rematch!</button>
            </p>
        </div>
    );
}