import React from 'react';
import { shallow } from 'enzyme';

import CreateBeerFormik from '.';

describe('CreateBeerFormik Component', () => {
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
