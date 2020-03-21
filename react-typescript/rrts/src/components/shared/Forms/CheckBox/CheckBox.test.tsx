import React from 'react';
import { shallow } from 'enzyme';
import { useField } from 'formik';

import CheckBox from '.';

jest.mock('formik');

describe('CheckBox Component', () => {
  test('should render without errors', () => {
    const wrapper = shallow(
      <CheckBox name="checkbox" value="test" label="card" />
    );
    (useField as jest.Mock).mockImplementation(() => [
      {
        name: 'Brahma',
        type: 'checkbox',
        value: 'chop'
      }
    ]);
    expect(wrapper.exists()).toEqual(true);
  });
});
