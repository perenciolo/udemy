import React from 'react';
import { shallow } from 'enzyme';

import DogFilter from '.';
import { activateFilter } from '../../store/Filter';

jest.mock('effector-react');
jest.mock('../../store/Filter');

describe('DogFilter Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render without error', () => {
    const wrapper = shallow(<DogFilter />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should call a function on change', () => {
    const wrapper = shallow(<DogFilter />);
    wrapper
      .find('[name="customized-radios"]')
      .simulate('change', { target: { value: 'a' } });
    expect(activateFilter).toHaveBeenCalledTimes(1);
    expect(activateFilter).toHaveBeenCalledWith('a');
  });

  test('should render a ListItem for each item on list', () => {});
});
