import React from 'react';
import { shallow } from 'enzyme';

import CreateBeerFormik from '.';

describe('CreateBeerFormik Component', () => {
  test('should submit form correctly', () => {
    const wrapper = shallow(<CreateBeerFormik />);
    const handleSubmit = jest.fn(() => {});
    wrapper.simulate('submit', handleSubmit());
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
