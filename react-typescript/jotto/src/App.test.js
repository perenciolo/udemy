import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

test('renders App component', () => {
  expect(shallow(<App />).exists()).toBe(true);
});
