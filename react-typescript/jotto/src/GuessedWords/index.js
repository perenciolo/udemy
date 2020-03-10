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

      {guessedWords.length !== 0 && (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => (
                <tr data-test="guessed-word" key={String(index)}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const style = {
  border: '1px solid #333',
  padding: '10px'
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
