import React from 'react';
import { mount, shallow } from 'enzyme';
import { useStore } from 'effector-react';

import DogList from '.';
import { DogInfo } from '../DogWrapper';
import { Filter } from '../../store/Filter';

jest.mock('effector-react');

describe('DogList Component', () => {
  const emptyDogsDataTxt = 'No dogs found for this filter';

  beforeEach(() => {});

  describe('empty dogs data behavior', () => {
    const wrapper = mount(<DogList />);
    test('should render without errors', () => {
      expect(wrapper.find('.dog-list').length).toBeTruthy();
    });

    test(`should render the text ${emptyDogsDataTxt} when dog list is empty`, () => {
      const wrapper = mount(<DogList />);
      expect(wrapper.find('.dog-list div').text()).toEqual(emptyDogsDataTxt);
    });
  });

  describe('dogs data is not empty', () => {
    const DogState: DogInfo[] = [
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
        name: 'collie-jamile',
        uri: 'collie'
      }
    ];

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should call useStore', () => {
      (useStore as jest.Mock).mockReturnValue(DogState);
      mount(<DogList />);
      expect(useStore).toHaveBeenCalledTimes(1);
      expect(useStore).toHaveBeenCalledWith(Filter);
    });

    test('should render a ListItem for each item on list', () => {
      (useStore as jest.Mock).mockReturnValue(DogState);
      const wrapper = shallow(<DogList />);
      expect(wrapper.find('DogAvatar').length).toEqual(DogState.length);
    });

    test('should display the correct name of breed associated with the index', () => {
      const wrapper = shallow(<DogList />);
      expect(wrapper.find('DogAvatar').get(0).props.breedName).toEqual(
        DogState[0].name
      );
    });
  });
});
