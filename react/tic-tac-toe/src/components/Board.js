import Cell from './Cell';

export default function Board({ cells, handleCellClick }) {
    return (
        <div className="board">
            <div className="row">
                <Cell content={cells[0]} handleClick={() => handleCellClick(0)} />
                <Cell content={cells[1]} handleClick={() => handleCellClick(1)}  />
                <Cell content={cells[2]} handleClick={() => handleCellClick(2)}  />
            </div>
            <div className="row">
                <Cell content={cells[3]} handleClick={() => handleCellClick(3)} />
                <Cell content={cells[4]} handleClick={() => handleCellClick(4)}  />
                <Cell content={cells[5]} handleClick={() => handleCellClick(5)}  />
            </div>
            <div className="row">
                <Cell content={cells[6]} handleClick={() => handleCellClick(6)} />
                <Cell content={cells[7]} handleClick={() => handleCellClick(7)}  />
                <Cell content={cells[8]} handleClick={() => handleCellClick(8)}  />
            </div>
        </div>
    );
}
