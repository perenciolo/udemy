import React from 'react';
import { shallow } from 'enzyme';

import CreateBeerForm from '.';

describe('CreateBeerForm Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render without errors', () => {
    const wrapper = shallow(<CreateBeerForm />);
    expect(wrapper.exists()).toEqual(true);
  });

  // @TODO: Check this test.
  test('should set error if input value is invalid', () => {
    const wrapper = shallow(<CreateBeerForm />);
    wrapper.find('[name="Beer name"]').invoke('changeHandler')({
      target: { value: '' }
    });
    expect(wrapper.find('[name="Beer name"]').prop('error')).toEqual(true);
    expect(wrapper.find('[name="Beer name"]').prop('errorState')).toEqual([
      'Please, give a valid beer name'
    ]);
  });

  test('should submit whitout errors', () => {
    const state = {
      name: 'Stout',
      selectedType: 'stout',
      hasCorn: true,
      ingredients: 'Stout ingredients'
    };
    const wrapper = shallow(<CreateBeerForm />);
    wrapper.find('[name="Beer name"]').invoke('changeHandler')({
      target: { value: state.name }
    });
    expect(wrapper.find('[name="Beer name"]').props().value).toEqual(
      state.name
    );
    wrapper.find('[name="selectedType"]').invoke('handler')({
      target: { value: state.selectedType }
    });
    expect(wrapper.find('[name="selectedType"]').props().value).toEqual(
      state.selectedType
    );
    wrapper.find('[name="hasCorn"]').invoke('handler')({
      target: { value: state.hasCorn }
    });
    expect(wrapper.find('[name="hasCorn"]').props().checked).toEqual(
      state.hasCorn
    );
    wrapper.find('[name="ingredients"]').invoke('changeHandler')({
      target: { value: state.ingredients }
    });
    expect(wrapper.find('[name="ingredients"]').props().value).toEqual(
      state.ingredients
    );
    jest.spyOn(console, 'log').mockImplementation(() => {});
    wrapper
      .find('DefButton')
      .invoke('handler')({ preventDefault: () => {} })
      .then(() => {
        expect(console.log).toHaveBeenCalledWith(state);
        expect(wrapper.find('[name="Beer name"]').props().value).toEqual('');
        expect(wrapper.find('[name="selectedType"]').props().value).toEqual('');
        expect(wrapper.find('[name="hasCorn"]').props().checked).toEqual(false);
        expect(wrapper.find('[name="ingredients"]').props().value).toEqual('');
      });
  });
});
