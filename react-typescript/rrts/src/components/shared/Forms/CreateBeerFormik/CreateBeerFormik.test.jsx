import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateBeerFormik from '.';

describe('CreateBeerFormik Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render without errors', () => {
    const wrapper = mount(<CreateBeerFormik />);
    expect(wrapper.find('Form').exists()).toEqual(true);
  });

  test('should check if prop is invalid', () => {
    const wrapper = mount(<CreateBeerFormik />);
    expect(wrapper.find('Field[name="name"]').prop('error')).toEqual(false);
  });

  test('should submit form correctly', () => {
    const wrapper = shallow(<CreateBeerFormik />);
    const state = {
      name: 'Nameless',
      selectedType: 'nameless',
      hasCorn: true,
      ingredients: 'ingredients'
    };
    jest.spyOn(console, 'log').mockImplementation(() => {});
    wrapper.find('Formik').invoke('onSubmit')(state, {});
    expect(console.log).toBeCalledWith(state);
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
