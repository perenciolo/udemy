import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';

import CreateBeerFormikForm from '.';
import { Formik } from 'formik';
import { act } from 'react-dom/test-utils';

const INITIAL_STATE = {
  name: '',
  selectedType: 'default',
  hasCorn: false,
  ingredients: ''
};

describe('CreateBeerFormikForm state', () => {
  // let wrapper: ReactWrapper;
  // let mockSetFormState: () => void;

  // beforeEach(() => {
  //   mockSetFormState = jest.fn();
  //   wrapper = mount(<CreateBeerFormikForm />);
  // });

  test('on changing input value state should be updated as well', () => {
    // const mockEvent = { target: { value: 'train' } };
    // const input = wrapper.find('input[name="name"]');
    // jest.spyOn(input.props(), 'onChange').mockImplementation(mockSetFormState);
    // input.props().onChange = mockSetFormState;
    // act(() => {
    //   input.simulate('change', [mockEvent, 'name']);
    //   console.log(wrapper.find('input[name="name"]').props());
    // });
    // expect(wrapper.find('[name="name"]').prop('value')).toEqual(
    //   mockEvent.target.value
    // );
  });
});
