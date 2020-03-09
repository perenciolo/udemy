import React, { Component } from 'react';
import { mount, ReactWrapper } from 'enzyme';

import DogDetails from '.';
import App from '../../App';

describe('Dog Details Component behaviors', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount<Component>(<App />);
  });

  test('renders DogDetail component', () => {
    expect(wrapper.find(DogDetails)).toHaveLength(1);
  });

  test('shows `Woof! Woof!` alert when button is clicked', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper
      .find('DogDetails')
      .find('button.bark-action')
      .simulate('click');
    expect(window.alert).toHaveBeenCalledWith(`Woof! Woof!`);
  });
});

describe('Dog Details props', () => {
  let wrapper: ReactWrapper;
  const name = 'Linus';
  const img = 'https://placeimg.com/300/300/animals';

  beforeEach(() => {
    const handleBark = jest.fn();
    wrapper = mount<Component>(
      <DogDetails name={name} img={img} onBark={handleBark} />
    );
  });

  test("component should have a prop with the dog's name", () => {
    expect(wrapper.prop('name')).toEqual(name);
  });

  test("component should have a prop with the dog's image", () => {
    expect(wrapper.prop('img')).toEqual(img);
  });

  test('component should have a prop onBark and it should be a function', () => {
    wrapper.find('button.bark-action').simulate('click');
    expect(wrapper.prop('onBark')).toBeCalled();
  });

  test('component should have a scolding counter and button', () => {
    expect(wrapper.find('button.scolding-counter--add')).toHaveLength(1);
    expect(wrapper.find('.scolding-counter')).toHaveLength(1);
  });

  test('when clicking add scolding button scold counter should increase by 1', () => {
    wrapper.find('button.scolding-counter--add').simulate('click');
    expect(Number(wrapper.find('.scolding-counter').text())).toEqual(1);
  });
});
