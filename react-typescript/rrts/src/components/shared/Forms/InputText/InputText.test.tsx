import React from 'react';
import { shallow, HTMLAttributes } from 'enzyme';

import InputText from '.';

describe('InputText Component', () => {
  interface FieldProps extends HTMLAttributes {
    error?: boolean;
  }

  test('should  render without errors', () => {
    const wrapper = shallow(
      <InputText name="Faxe" label="Beer" error={false} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test('should  have `name` and `label` string props and error boolean prop', () => {
    const wrapper = shallow(
      <InputText name="Faxe" label="Beer" error={false} />
    );
    expect(wrapper.props().children[0].props.name).toEqual('Faxe');
    expect(wrapper.props().children[0].props.label).toEqual('Beer');
    expect(wrapper.props().error).toBe(false);
  });

  test('should have a prop rows = 3 if prop `multiline` is present', () => {
    const wrapper = shallow(
      <InputText name="Faxe" label="Beer" error={false} multiline />
    );
    interface FieldProps extends HTMLAttributes {
      multiline?: boolean;
    }
    const fieldProps: FieldProps = wrapper.find('Field').props();
    expect(fieldProps.rows).toEqual(3);
    expect(fieldProps.multiline).not.toBeUndefined();
  });

  test('should have a prop rows = undefined if prop `multiline` is not present', () => {
    const wrapper = shallow(
      <InputText name="Faxe" label="Beer" error={false} />
    );
    expect(wrapper.props().multiline).toBeUndefined();
  });

  test('should display error message if prop `error` is true', () => {
    const wrapper = shallow(<InputText name="Faxe" label="Beer" error />);
    const fieldProps: FieldProps = wrapper.find('Field').props();
    expect(fieldProps.error).toEqual(true);
    expect(
      wrapper.find('WithStyles(ForwardRef(FormHelperText))').exists()
    ).toEqual(true);
  });

  test('should not display error message if prop `error` is false', () => {
    const wrapper = shallow(
      <InputText name="Faxe" label="Beer" error={false} />
    );
    const fieldProps: FieldProps = wrapper.find('Field').props();
    expect(fieldProps.error).toEqual(false);
    expect(
      wrapper.find('WithStyles(ForwardRef(FormHelperText))').exists()
    ).toEqual(false);
  });
});
