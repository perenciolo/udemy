import React from 'react';
import AlertBtn from '.';
import { shallow } from 'enzyme';

describe('Alert Button Component testing', () => {
  const btnTxt = 'Alert Me';
  const alertTxt = 'Hello World';

  test('renders Alert Me Button', () => {
    const wrapper = shallow(<AlertBtn btnTxt={btnTxt} alertTxt={alertTxt} />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('shows `Hello World` alert when button is clicked', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<AlertBtn btnTxt={btnTxt} alertTxt={alertTxt} />);
    wrapper.find('WithStyles(ForwardRef(Button))').simulate('click');
    expect(window.alert).toHaveBeenCalledWith(alertTxt);
  });
});
