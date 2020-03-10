import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => shallow(<App {...props} />);

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper -Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
let wrapper;

beforeEach(() => {
  wrapper = setup();
});

test('renders without crashing', () => {
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('test increment button', () => {
  const incrementBtn = findByTestAttr(wrapper, 'increment-button');
  expect(incrementBtn.length).toBe(1);
});

test('renders counter display', () => {
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('couter starts at 0', () => {
  const initialCounterState = Number(
    findByTestAttr(wrapper, 'counter-display').text()
  );
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
  const incrementBtn = findByTestAttr(wrapper, 'increment-button');
  incrementBtn.simulate('click');
  const nextCounterState = Number(
    findByTestAttr(wrapper, 'counter-display').text()
  );
  expect(nextCounterState).toBe(1);
});
