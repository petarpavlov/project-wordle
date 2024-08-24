import React from 'react';

function GuessInput({
  guess,
  setGuess,
  guessResults,
  setGuessResults,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess('');
        setGuessResults([guess, ...guessResults]);
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
