import React from 'react';
import { shallow, HTMLAttributes } from 'enzyme';

import FormSelect from '.';

describe('FormSelect Component', () => {
  interface FieldProps extends HTMLAttributes {
    error?: boolean;
  }

  const options = [
    { name: 'Ipa', value: 'ipa' },
    { name: 'Stout', value: 'stout' }
  ];

  test('should render without errors', () => {
    const wrapper = shallow(
      <FormSelect
        name="Beer Type"
        options={options}
        label="Beer Type"
        error={false}
      />
    );
    expect(wrapper.exists()).toEqual(true);
  });

  test('should have `name` and `label` props of type string, `options` prop of type array and error prop of type boolean', () => {
    const wrapper = shallow(
      <FormSelect
        name="Beer Type"
        options={options}
        label="Beer Type"
        error={false}
      />
    );

    const fieldProps: FieldProps = wrapper.find('Field').props();
    expect(wrapper.props().children.length).toEqual(options.length);
    expect(fieldProps.name).toEqual('Beer Type');
    expect(fieldProps.label).toEqual('Beer Type');
    expect(fieldProps.error).toEqual(false);
  });

  test('should have an option for each value given as prop', () => {
    const wrapper = shallow(
      <FormSelect
        name="Beer Type"
        options={options}
        label="Beer Type"
        error={false}
      />
    );
    expect(wrapper.find('Field').children().length).toEqual(options.length);
  });

  test('should display an error message if prop `error` is true', () => {
    const wrapper = shallow(
      <FormSelect name="Beer Type" options={options} label="Beer Type" error />
    );
    const fieldProps: FieldProps = wrapper.find('Field').props();
    expect(fieldProps.error).toEqual(true);
    expect(wrapper.find('[name="selectedType"]').exists()).toEqual(true);
  });

  test('should not display an error message if prop `error` is false', () => {
    const wrapper = shallow(
      <FormSelect
        name="Beer Type"
        options={options}
        label="Beer Type"
        error={false}
      />
    );
    const fieldProps: FieldProps = wrapper.find('Field').props();
    expect(fieldProps.error).toEqual(false);
    expect(wrapper.find('[name="selectedType"]').exists()).toEqual(false);
  });
});
