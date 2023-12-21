import React from 'react';
import {range} from '../../utils';
import {checkGuess} from '../../game-helpers'

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ guessWord, answer }) {
  const result = checkGuess(guessWord, answer);
  return <p className="guess">
  {range(5).map((num) => (
    <Cell
      key={num}
      letter={result ? result[num].letter : undefined}
      status={result ? result[num].status : undefined}
    />
  ))}
</p>;
}

export default Guess;