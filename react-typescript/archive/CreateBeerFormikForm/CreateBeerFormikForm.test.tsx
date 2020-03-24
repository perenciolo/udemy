import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';

import CreateBeerFormikForm from '.';
import { Formik, Field, Form } from 'formik';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, findByTestId } from '@testing-library/react';

const INITIAL_STATE = {
  name: '',
  selectedType: 'default',
  hasCorn: false,
  ingredients: ''
};

const simulateChangeOnInput = (
  wrapper: ShallowWrapper | ReactWrapper,
  inputSelector: string,
  newValue: string
): ShallowWrapper | ReactWrapper => {
  const input = wrapper.find(inputSelector);
  input.simulate('change', [
    {
      target: { value: newValue }
    },
    'name'
  ]);
  return wrapper.find(inputSelector);
};

describe('CreateBeerFormikForm state', () => {
  // let wrapper: ReactWrapper;
  // let mockSetFormState: () => void;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('on changing input value state should be updated as well', () => {
    // const wrapper = mount(<CreateBeerFormikForm />);
    // const updatedInput = simulateChangeOnInput(
    //   wrapper,
    //   'input[name="name"]',
    //   'Jackson'
    // );
    // expect(updatedInput.props().value).toEqual('Jackson');
    // const mockEvent = { target: { value: 'train' } };
    // const mockSetFormState = jest.fn();
    // const input = wrapper.find('input[name="name"]');
    // jest.spyOn(input.props(), 'onChange').mockImplementation(mockSetFormState);
    // try {
    //   const res = await input.simulate('change', [mockEvent, 'name']);
    //   done();
    // } catch (error) {
    //   done(error);
    // }
    // expect(mockSetFormState).toHaveBeenCalledWith(mockEvent);
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
