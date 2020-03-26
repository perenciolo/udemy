import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { useField } from 'formik';

import CheckBox, { CheckBoxProps } from '.';

jest.mock('formik');

describe('CheckBox Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    (useField as jest.Mock).mockImplementation(() => [
      {
        name: 'Brahma',
        type: 'checkbox',
        value: 'chop'
      }
    ]);
    wrapper = shallow(<CheckBox name="Brahma" label="Has corn?" />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render without errors', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test('should render props without errors', () => {
    const control: { props: CheckBoxProps } = wrapper.prop('control');
    const checkboxProps: CheckBoxProps = control.props;
    expect(checkboxProps.name).toEqual('Brahma');
    expect(checkboxProps.label).toEqual('Has corn?');
    expect(checkboxProps.value).toEqual('chop');
  });
});
