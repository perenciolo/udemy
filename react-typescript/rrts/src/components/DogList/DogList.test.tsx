import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import DogList from '.';

describe('DogList Component', () => {
  let wrapper: ReactWrapper;

  const breeds = ['chihuahua', 'chow', 'clumber', 'cockapoo', 'collie'];

  beforeEach(() => {
    wrapper = mount(<DogList list={breeds} />);
  });

  test('should render without errors', () => {
    expect(wrapper.find('.dog-list').length).toBeTruthy();
  });

  test('should take an array of breeds as prop', () => {
    const list: string[] = wrapper.prop('list');
    expect(list.length).toBeTruthy();
  });

  test('should render a ListItem for each item on list', () => {
    expect(wrapper.find('li.MuiListItem-root').length).toEqual(breeds.length);
  });

  test('should display the correct name of breed associated with the index', () => {
    expect(
      wrapper.find('.MuiListItemText-primary').get(0).props.children
    ).toEqual(breeds[0]);
  });
});
