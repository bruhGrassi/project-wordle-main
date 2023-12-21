import React, { useState } from 'react';

function GuessInput({handleGuessList, gameStatus}) {
  const [guess, setGuess] = useState('');

  function submitGuess(event){
    event.preventDefault();
    console.log({'guess': guess});
    handleGuessList(guess);
    setGuess('');
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={submitGuess}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input required id="guess-input" type="text" value={guess} 
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="palavra de 5 letras"
        disabled={gameStatus !== 'running'}
      />
    </form>
  </div>;
}

export default GuessInput;
