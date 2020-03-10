import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function GuessedWords({ guessedWords }) {
  return (
    <div data-test="component-guessed-word">
      {(!guessedWords || !guessedWords.length) && (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      )}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
