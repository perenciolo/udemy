import React from 'react';

// import { Container } from './styles';

/**
 * Functional React Component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component
 */
export default function Congrats(props) {
  return (
    (props && props.success && (
      <div data-test="component-congrats">
        <span data-test="congrats-message"></span>
      </div>
    )) || <div data-test="component-congrats" />
  );
}
