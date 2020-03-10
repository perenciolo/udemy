import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value)}
        />
        <button data-test="submit-button" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};
