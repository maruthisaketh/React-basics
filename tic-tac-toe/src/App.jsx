import Header from "./components/header/header"
import Player from "./components/player/player"
import GameBoard from "./components/gameBoard/GameBoard"
import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onselectSquare={handleSelectSquare} activePlayerSymbol = {activePlayer}/>
        </div>
        Log
      </main>
    </>
  )
}

export default App
