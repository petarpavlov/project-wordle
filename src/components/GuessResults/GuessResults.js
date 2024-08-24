import React from 'react';

function GuessResults({ guess, guessResults }) {
  return (
    <div className="guess-results">
      <ul>
        {guessResults.map((guess) => (
          <li className="guess">{guess}</li>
        ))}
      </ul>
    </div>
  );
}

export default GuessResults;
