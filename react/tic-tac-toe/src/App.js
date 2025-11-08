import { useState } from 'react';

import calculateWinner from './winner';
import Board from './components/Board';

function App() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const winner = calculateWinner(cells);

  function handleCellClick(index) {
    if (winner || cells[index]) {
      return;
    }

    const copyCells = cells;

    copyCells[index] = currentPlayer;

    setCells(copyCells);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function handleResetButtonClick() {
    setCells(Array(9).fill(null));
    setCurrentPlayer('X');
  }

  return (
    <div className="App">
      <p className="tip">{ winner ? `Winner: ${winner}` : `Current player: ${currentPlayer}` }</p>
      <Board cells={cells} handleCellClick={handleCellClick} />
      <button className="button is-danger" onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
}

export default App;
