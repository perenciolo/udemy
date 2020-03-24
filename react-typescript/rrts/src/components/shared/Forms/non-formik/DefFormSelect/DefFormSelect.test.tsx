import React from 'react';
import { shallow } from 'enzyme';

import DefFormSelect from '.';

describe('DefFormSelect Component', () => {
  const options = [
    { name: 'Ipa', value: 'ipa' },
    { name: 'Stout', value: 'stout' },
    { name: 'Brew', value: 'brew' }
  ];

  test('should render without errors', () => {
    const wrapper = shallow(
      <DefFormSelect
        name="Beer Type"
        value={options[0].value}
        options={options}
        label="Beer Type"
        error={false}
        errorState={[]}
        handler={() => {}}
      />
    );
    expect(wrapper.exists()).toEqual(true);
  });

  test('should render props without errors', () => {
    const wrapper = shallow(
      <DefFormSelect
        name="Beer Type"
        value={options[0].value}
        options={options}
        label="Beer Type"
        error={false}
        errorState={[]}
        handler={() => {}}
      />
    );
    const select = wrapper.find('WithStyles(ForwardRef(Select))');
    expect(select.props().name).toEqual('Beer Type');
    expect(select.props().value).toEqual('ipa');
    expect(wrapper.find('WithStyles(ForwardRef(InputLabel))').text()).toEqual(
      'Beer Type'
    );
    expect(wrapper.props().error).toEqual(false);
    expect(select.props().onChange).toBeDefined();
    expect(select.children().length).toEqual(options.length + 1); // +1 = none option
  });

  test('should display an error message if prop `error` is true', () => {
    const wrapper = shallow(
      <DefFormSelect
        name="Beer Type"
        value={options[0].value}
        options={options}
        label="Beer Type"
        error
        errorState={['this is an error', 'this is another error']}
        handler={() => {}}
      />
    );
    expect(wrapper.props().error).toEqual(true);
    expect(
      wrapper.find('WithStyles(ForwardRef(FormHelperText))').get(0).props
        .children
    ).toEqual('this is an error');
    expect(
      wrapper.find('WithStyles(ForwardRef(FormHelperText))').get(1).props
        .children
    ).toEqual('this is another error');
  });

  test('should not display an error message if prop `error` is false', () => {
    const wrapper = shallow(
      <DefFormSelect
        name="Beer Type"
        value={options[0].value}
        options={options}
        label="Beer Type"
        error={false}
        errorState={['this is an error', 'this is another error']}
        handler={() => {}}
      />
    );
    expect(wrapper.props().error).toEqual(false);
    expect(
      wrapper.find('WithStyles(ForwardRef(FormHelperText))').exists()
    ).toBe(false);
  });

  test('should call prop `handler` on change', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DefFormSelect
        name="Beer Type"
        value={options[0].value}
        options={options}
        label="Beer Type"
        error={false}
        errorState={['this is an error', 'this is another error']}
        handler={onChange}
      />
    );
    wrapper.find('WithStyles(ForwardRef(Select))').simulate('change', 'ipa');
    expect(onChange).toHaveBeenCalledWith('ipa');
  });
});
