import React from 'react';
import { shallow } from 'enzyme';

import CreateBeerForm from '.';

describe('CreateBeerForm Component', () => {
  test('should render without errors', () => {
    const wrapper = shallow(<CreateBeerForm />);
    expect(wrapper.exists()).toEqual(true);
  });
});
