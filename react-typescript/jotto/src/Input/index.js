import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Input({ secretWord }) {
  return <div data-test="component-input" />;
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};
