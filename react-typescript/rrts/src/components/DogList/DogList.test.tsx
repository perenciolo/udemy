import React from 'react';
import { ReactWrapper, mount, shallow, ShallowWrapper } from 'enzyme';
import { useStore } from 'effector-react';

import DogList from '.';
import { DogInfo } from '../DogWrapper';

jest.mock('effector-react');

describe('DogList Component', () => {
  let wrapper: ReactWrapper;
  const emptyDogsDataTxt = 'No dogs found for this filter';

  beforeEach(() => {
    wrapper = mount(<DogList />);
  });

  describe('empty dogs data behavior', () => {
    test('should render without errors', () => {
      expect(wrapper.find('.dog-list').length).toBeTruthy();
    });

    test(`should render the text ${emptyDogsDataTxt} when dog list is empty`, () => {
      expect(wrapper.find('.dog-list div').text()).toEqual(emptyDogsDataTxt);
    });
  });

  describe('dogs data is not empty', () => {
    let wrapper: ShallowWrapper;
    const DogStore: DogInfo[] = [
      {
        name: 'chihuahua',
        uri: 'chihuahua'
      },
      {
        name: 'chow',
        uri: 'chow'
      },
      {
        name: 'clumber',
        uri: 'clumber'
      },
      {
        name: 'cockapoo',
        uri: 'cockapoo'
      },
      {
        name: 'collie',
        uri: 'collie'
      }
    ];

    beforeEach(() => {
      wrapper = shallow(<DogList />);
    });

    test('should call useStore', () => {
      (useStore as jest.Mock).mockReturnValue(DogStore);

      expect(useStore).toHaveBeenCalledTimes(1);
    });

    // test('should render a ListItem for each item on list', () => {
    //   expect(wrapper.find('li.MuiListItem-root').length).toEqual(DogStore.length);
    // });

    // test('should display the correct name of breed associated with the index', () => {
    //   console.log(wrapper.debug());
    //   expect(
    //     wrapper.find('.MuiListItemText-primary').get(0).props.children
    //   ).toEqual(DogStore[0]);
    // });
  });
});
