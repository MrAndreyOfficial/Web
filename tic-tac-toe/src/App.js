import { useState } from 'react';
import { hasWinner } from './winner';

import Cell from './components/Cell';
import Board from './components/Board';
import BoardRow from './components/Board-Row';

import './index.css';

function App() {
  const [cells, setCells ] = useState(Array(9).fill(null));
  const [side, setSide] = useState('X');

  const winner = hasWinner(cells);
  const message = winner ? `Winner: ${winner}` : `Turn: ${side}`;

  function handleCellClick(cellIndex) {
    if (cells[cellIndex] || winner) {
      return;
    }

    const newCells = cells.slice();

    newCells[cellIndex] = side;
    
    setSide(side === 'X' ? 'O' : 'X');
    setCells(newCells);
  }

  return (
    <div className='app'>
      <p className='tip'>{ message }</p>
      <Board>
        <BoardRow>
          <Cell value={cells[0]} onCellClick={() => handleCellClick(0)} />
          <Cell value={cells[1]} onCellClick={() => handleCellClick(1)} />
          <Cell value={cells[2]} onCellClick={() => handleCellClick(2)} />
        </BoardRow>
        <BoardRow>
          <Cell value={cells[3]} onCellClick={() => handleCellClick(3)} />
          <Cell value={cells[4]} onCellClick={() => handleCellClick(4)} />
          <Cell value={cells[5]} onCellClick={() => handleCellClick(5)} />
        </BoardRow>
        <BoardRow>
          <Cell value={cells[6]} onCellClick={() => handleCellClick(6)} />
          <Cell value={cells[7]} onCellClick={() => handleCellClick(7)} />
          <Cell value={cells[8]} onCellClick={() => handleCellClick(8)} />
        </BoardRow>
      </Board>
    </div>
  );
}

export default App;
