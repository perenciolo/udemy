import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { useStore } from 'effector-react';

import DogDetails from '.';
import { DogInfo } from '../DogWrapper';

jest.mock('effector-react');

describe('Dog Details Component behaviors', () => {
  let wrapper: ReactWrapper;
  const handleBark = jest
    .fn()
    .mockImplementation(() => window.alert(`Woof! Woof!`));

  const activeDog: DogInfo = {
    name: 'Linus',
    uri: 'https://placeimg.com/300/300/animals',
    scold: 1
  };

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue(activeDog);
    wrapper = mount(<DogDetails onBark={handleBark} />);
  });

  test('renders DogDetail component', () => {
    expect(wrapper.find(DogDetails)).toHaveLength(1);
  });

  test('shows `Woof! Woof!` alert when button is clicked', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper
      .find(DogDetails)
      .find('button.bark-action')
      .simulate('click');
    expect(window.alert).toHaveBeenCalledWith(`Woof! Woof!`);
  });

  test('component should have a prop onBark and it should be a function', () => {
    wrapper.find('button.bark-action').simulate('click');
    expect(wrapper.prop('onBark')).toBeCalled();
  });

  test('component should have a scolding counter and button', () => {
    expect(wrapper.find('button.scolding-counter--add')).toHaveLength(1);
  });

  test('when clicking add scolding button scold counter should appear and increase by 1', () => {
    wrapper.find('button.scolding-counter--add').simulate('click');
    expect(wrapper.find('.scolding-counter')).toHaveLength(1);
    expect(Number(wrapper.find('.scolding-counter').text())).toEqual(1);
  });
});
