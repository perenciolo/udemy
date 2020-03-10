import React from 'react';
import App from './App';

import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test('renders App component', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app.length).toBe(1);
});
