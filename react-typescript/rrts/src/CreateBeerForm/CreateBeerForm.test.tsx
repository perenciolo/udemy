import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import CreateBeerForm, { IBeerFormState } from '.';

const INITIAL_STATE: IBeerFormState = {
  name: '',
  selectedType: 'default',
  hasCorn: false,
  ingredients: ''
};

describe('CreateBeerForm state', () => {
  let wrapper: ShallowWrapper;
  let mockSetFormState: () => void;

  beforeEach(() => {
    mockSetFormState = jest.fn();
    wrapper = shallow(<CreateBeerForm />);
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [INITIAL_STATE, mockSetFormState]);
  });

  test('on clicking on the submit button, the values on the form must be written on the console', () => {
    // expect(mockSetFormState).toBeCalledWith('train');
    // const submitBtn = wrapper.find('button.btn-primary');
    // console.log(submitBtn.simulate('click'));
  });

  test('on changing input value state should be updated as well', () => {
    const mockEvent = { target: { value: 'train' } };
    wrapper.find('input[name="name"]').simulate('change', mockEvent);

    expect(wrapper.find('input[name="name"]').prop('value')).toEqual(
      mockEvent.target.value
    );
  });
});
