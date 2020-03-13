import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import DogAvatar from '.';

describe('DogAvatar Component', () => {
  let wrapper: ReactWrapper;
  const breedName = 'Akita';

  beforeEach(() => {
    wrapper = mount(<DogAvatar breedName={breedName} />);
  });

  test('should have a string prop `breedName`', () => {
    expect(wrapper.prop('breedName')).toEqual(expect.any(String));
  });

  test('prop `breedName` value should be equal to the one passed on component instance', () => {
    expect(wrapper.prop('breedName')).toEqual(breedName);
  });

  test('should render without errors', () => {
    expect(wrapper.find('[breedName="Akita"]').length).toEqual(1);
  });
});
