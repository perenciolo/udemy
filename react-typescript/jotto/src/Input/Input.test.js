import React from 'react';
import { shallow } from 'enzyme';

import Input from '.';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = { secretWord: 'party' };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<Input {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');

  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with the expected props', () => {
  checkProps(Input, defaultProps);
});
