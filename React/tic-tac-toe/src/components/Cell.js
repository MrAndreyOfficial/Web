export default function Cell({ onCellClick, value }) {
    return <button className='cell' onClick={ onCellClick }>{ value }</button>
}
