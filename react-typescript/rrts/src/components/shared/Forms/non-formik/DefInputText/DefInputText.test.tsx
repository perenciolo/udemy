import React from 'react';
import { shallow, HTMLAttributes } from 'enzyme';

import DefInputText from '.';

describe('DefInputText Component', () => {
  interface FieldProps extends HTMLAttributes {
    error?: boolean;
  }

  test('should  render without errors', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={[]}
        changeHandler={() => {}}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test('should  render props without errors', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={[]}
        changeHandler={() => {}}
      />
    );
    expect(wrapper.children().props().name).toEqual('Beer Name');
    expect(wrapper.children().props().label).toEqual('Beer Name');
    expect(wrapper.children().props().value).toEqual('Faxe');
    expect(wrapper.children().props().onChange).toBeDefined();
  });

  test('should have a prop rows = 3 if prop `multiline` is present', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={[]}
        changeHandler={() => {}}
        multiline
      />
    );
    expect(wrapper.children().prop('rows')).toEqual(3);
    expect(wrapper.children().prop('multiline')).toEqual(true);
  });

  test('should have a prop rows = undefined if prop `multiline` is not present', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={[]}
        changeHandler={() => {}}
      />
    );
    expect(wrapper.children().prop('rows')).toBeUndefined();
  });

  test('should display error message if prop `error` is true and has errorState', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error
        value="Faxe"
        errorState={['error data']}
        changeHandler={() => {}}
      />
    );
    const error = wrapper.find('WithStyles(ForwardRef(FormHelperText))');
    expect(error.exists()).toEqual(true);
    expect(error.text()).toEqual('error data');
  });

  test('should not display error message if prop `error` is false', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={['error data']}
        changeHandler={() => {}}
      />
    );
    const error = wrapper.find('WithStyles(ForwardRef(FormHelperText))');
    expect(error.exists()).toEqual(false);
  });

  test("should have a prop `changeHandler` that is a function and it's callable onChange", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={['error data']}
        changeHandler={onChange}
      />
    );
    wrapper
      .find('WithStyles(ForwardRef(TextField))')
      .simulate('change', 'value');
    expect(onChange).toHaveBeenCalledWith('value');
  });
  test('should render helperText if it is defined and error is false', () => {
    const wrapper = shallow(
      <DefInputText
        name="Beer Name"
        label="Beer Name"
        error={false}
        value="Faxe"
        errorState={['error data']}
        changeHandler={() => {}}
        helperText="This is a helperText"
      />
    );
    expect(
      wrapper.find('WithStyles(ForwardRef(FormHelperText))').text()
    ).toEqual('This is a helperText');
  });
});
