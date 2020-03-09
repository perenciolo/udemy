import React, { Component } from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount, ReactWrapper } from 'enzyme';

import AlertBtn from './components/AlertBtn';
import DogDetails from './components/DogDetails';

describe('Alert Button Component testing', () => {
  const { getByText } = render(<App />);
  const btnTxt = 'Alert Me';
  const alertTxt = 'Hello World';
  const btnElement = getByText(new RegExp(btnTxt, 'i'));

  test('renders Alert Me Button', () => {
    expect(btnElement).toBeInTheDocument();
  });

  test('shows `Hello World` alert when button is clicked', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const output = mount(<AlertBtn btnTxt={btnTxt} alertTxt={alertTxt} />);
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith(alertTxt);
  });
});
