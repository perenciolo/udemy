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

describe('state controlled input field', () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    wrapper = setup();
  });

  test('state updates with value of input box upon change', () => {
    const mockEvent = { target: { value: 'train' } };
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('update state get called when clicking the submit button', () => {
    const submitBtn = findByTestAttr(wrapper, 'submit-button');
    submitBtn.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
