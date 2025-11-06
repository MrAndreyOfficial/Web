import { useState } from 'react';
import { quotes } from './quotes';

function App() {
  const [currentPosition, setCurrentPosition] = useState(0);

  function onNextClick() {
    if (currentPosition >= quotes.length - 1) {
      setCurrentPosition(0);
      return;
    }

    setCurrentPosition(currentPosition + 1);
  }

  function onPrevClick() {
    if (currentPosition <= 0) {
      setCurrentPosition(quotes.length - 1);
      return;
    }

    setCurrentPosition(currentPosition - 1);
  }

  return (
    <div className='App'>
      <div className='quote-container'>
        <p className='quote-position'>{currentPosition + 1 } of { quotes.length }</p>
        <p className='quote-text'>
          { quotes[currentPosition] }
        </p>
        <div className='buttons'>
          <button className='button' onClick={onPrevClick}>Prev</button>
          <button className='button' onClick={onNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
