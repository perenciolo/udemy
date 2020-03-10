import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

/**
 * Functional React Component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component
 */
export default function Congrats({ success }) {
  return (
    (success && (
      <div data-test="component-congrats">
        <span data-test="congrats-message"></span>
      </div>
    )) || <div data-test="component-congrats" />
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
