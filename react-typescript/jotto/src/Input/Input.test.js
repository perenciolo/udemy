import React from 'react';
import { shallow } from 'enzyme';

import Input from '.';
import { findByTestAttr } from '../test/testUtils';

const setup = () => shallow(<Input />);

test('render without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');

  expect(inputComponent.length).toBe(1);
});
