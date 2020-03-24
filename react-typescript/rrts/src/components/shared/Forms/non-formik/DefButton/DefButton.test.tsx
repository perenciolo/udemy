import React from 'react';
import { shallow } from 'enzyme';

import DefButton from '.';

describe('DefButton Component', () => {
  test('should render without errors', () => {
    const wrapper = shallow(<DefButton handler={() => {}} disabled />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should have prop `disabled` of type boolean', () => {
    const wrapper = shallow(<DefButton handler={() => {}} disabled={false} />);
    expect(
      wrapper.find('WithStyles(ForwardRef(Button))').prop('disabled')
    ).toBe(false);
  });

  test('should have prop `handler` of type function and call it on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<DefButton handler={onClick} disabled />);
    const btn = wrapper.find('WithStyles(ForwardRef(Button))');
    const state = {
      name: 'Ipa',
      hasCorn: true,
      selectedType: 'ipa',
      ingredients: 'Ipa ingredients'
    };
    btn.simulate('click', state);
    expect(onClick).toHaveBeenCalledWith(state);
  });
});
