import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(['']); //[;
  const [guess, setGuess] = React.useState('');
  return (
    <>
      <GuessResults guess={guess} guessResults={guessResults} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessResults={guessResults}
        setGuessResults={setGuessResults}
      />
    </>
  );
}

export default Game;
