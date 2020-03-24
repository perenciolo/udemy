import React from 'react';
import { shallow, mount } from 'enzyme';

import DefCheckBox from '.';

describe('DefCheckBox Component', () => {
  test('should render without errors', () => {
    const wrapper = shallow(
      <DefCheckBox name="DefCheckBox" label="card" checked handler={() => {}} />
    );
    expect(wrapper.exists()).toEqual(true);
  });

  test('should render props without errors', () => {
    const wrapper = shallow(
      <DefCheckBox name="DefCheckBox" label="card" checked handler={() => {}} />
    );
    expect(
      wrapper.find('WithStyles(ForwardRef(FormControlLabel))').prop('label')
    ).toEqual('card');
    expect(wrapper.children().prop('control').props.name).toEqual(
      'DefCheckBox'
    );
    expect(wrapper.children().prop('control').props.checked).toEqual(true);
    expect(wrapper.children().prop('control').props.onChange).toBeDefined();
  });

  test('should have ability to change value of prop `checked` to false', () => {
    const wrapper = shallow(
      <DefCheckBox
        name="DefCheckBox"
        label="card"
        checked={false}
        handler={() => {}}
      />
    );
    expect(wrapper.children().prop('control').props.checked).toEqual(false);
  });

  test("should have a prop `handler` that is a function and it's callable onChange", () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <DefCheckBox
        name="DefCheckBox"
        label="card"
        checked={false}
        handler={onChange}
      />
    );
    wrapper.find('ForwardRef(SwitchBase) input').simulate('change', 'val');
    expect(onChange).toHaveBeenCalled();
  });
});
