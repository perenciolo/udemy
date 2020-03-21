import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import DogWrapper from '.';
import { useStore } from 'effector-react';

import { IsLoading } from '../../store/IsLoading';

jest.mock('effector-react');

describe('DogListWrapper Component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render without errors', () => {
    wrapper = shallow(<DogWrapper />);
    expect(wrapper.find('[direction="column"]').length).toEqual(1);
  });

  test('should mock and call useStore', () => {
    (useStore as jest.Mock).mockReturnValue(true);
    wrapper = mount(<DogWrapper />);
    expect(useStore).toHaveBeenCalledTimes(1);
    expect(useStore).toHaveBeenCalledWith(IsLoading);
  });

  test('should show loading spinner when IsLoading state is true', () => {
    (useStore as jest.Mock).mockReturnValue(true);
    wrapper = mount(<DogWrapper />);
    expect(wrapper.find('svg.MuiCircularProgress-svg').length).toBeTruthy();
  });

  test('should hide components when IsLoading state is true', () => {
    (useStore as jest.Mock).mockReturnValue(true);
    wrapper = mount(<DogWrapper />);
    expect(wrapper.find('DogList').length).toEqual(0);
    expect(wrapper.find('DogDetails').length).toEqual(0);
    expect(wrapper.find('DogFilter').length).toEqual(0);
  });

  test('should hide loading spinner when IsLoading state is false', () => {
    (useStore as jest.Mock).mockReturnValue(false);
    wrapper = mount(<DogWrapper />);
    expect(wrapper.find('svg.MuiCircularProgress-svg').length).toEqual(0);
  });

  test('should show components when IsLoading state is false', () => {
    (useStore as jest.Mock).mockReturnValue(false);
    wrapper = mount(<DogWrapper />);
    expect(wrapper.find('DogList').length).toEqual(1);
    expect(wrapper.find('DogDetails').length).toEqual(1);
    expect(wrapper.find('DogFilter').length).toEqual(1);
  });
});
