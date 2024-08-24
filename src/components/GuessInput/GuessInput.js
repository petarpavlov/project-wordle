import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (guess.length !== 5) {
        //   alert('Please enter a 5 letter word');
        //   return;
        // }
        console.log({ guess });
        setGuess('');
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
