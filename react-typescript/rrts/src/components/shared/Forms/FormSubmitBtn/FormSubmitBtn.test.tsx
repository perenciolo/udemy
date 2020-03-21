import React from 'react';
import { shallow } from 'enzyme';

import FormSubmitBtn from '.';

describe('FormSubmitBtn Component', () => {
  test('should render without errors', () => {
    const wrapper = shallow(<FormSubmitBtn isDisabled />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('should have a `isDisabled` prop of type boolean', () => {
    const wrapper = shallow(<FormSubmitBtn isDisabled={false} />);
    expect(wrapper.children().props().disabled).toEqual(false);
  });

  test('should have a button child with disabled state if `isDisabled` prop is true', () => {
    const wrapper = shallow(<FormSubmitBtn isDisabled />);
    expect(wrapper.children().props().disabled).toEqual(true);
  });
});
