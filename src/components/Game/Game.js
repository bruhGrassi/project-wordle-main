import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessList, setGuessList] = React.useState([]);

  function handleGuessList(guessWord) {
    const nextGuesses = [...guessList, guessWord];
    setGuessList(nextGuesses);

    if (guessWord.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return <>
    {gameStatus === 'won' && (
      <Banner status={gameStatus} numOfGuesses={NUM_OF_GUESSES_ALLOWED} />
    )}
    {gameStatus === 'lost' && <Banner status={gameStatus} answer={answer} />}
    <GuessResult guessList={guessList} answer={answer}/>
    <GuessInput handleGuessList={handleGuessList} gameStatus={gameStatus} />
  </>;
}

export default Game;
