import React from 'react';
import { shallow } from 'enzyme';
import { useField } from 'formik';

import CheckBox from '.';

jest.mock('formik');

describe('CheckBox Component', () => {
  test('should render without errors', () => {
    (useField as jest.Mock).mockImplementation(() => [
      {
        name: 'Brahma',
        type: 'checkbox',
        value: 'chop'
      }
    ]);
    const wrapper = shallow(
      <CheckBox name="checkbox" value="test" label="card" />
    );
    expect(wrapper.exists()).toEqual(true);
  });
});
