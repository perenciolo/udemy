import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import DogAvatar from '.';

describe('DogAvatar Component', () => {
  let wrapper: ReactWrapper;
  const breedName = 'Akita';
  const img = 'https://placeimg.com/300/300/animals';

  beforeEach(() => {
    wrapper = mount(<DogAvatar dogImg={img} breedName={breedName} />);
  });

  test('should have a string prop `breedName`', () => {
    expect(wrapper.prop('breedName')).toEqual(expect.any(String));
  });

  test('should have a string prop `dogImg`', () => {
    expect(wrapper.prop('dogImg')).toEqual(img);
  });

  test('prop `breedName` value should be equal to the one passed on component instance', () => {
    expect(wrapper.prop('breedName')).toEqual(breedName);
  });

  test('should render without errors', () => {
    expect(wrapper.find('[breedName="Akita"]').length).toEqual(1);
  });
});
