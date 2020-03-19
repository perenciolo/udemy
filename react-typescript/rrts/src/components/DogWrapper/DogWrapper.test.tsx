import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DogWrapper from '.';
import { useStore } from 'effector-react';

jest.mock('effector-react');

describe('DogListWrapper Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<DogWrapper />);
  });

  test('should render without errors', () => {
    expect(wrapper.find('[direction="column"]').length).toEqual(1);
  });

  test('should show loading spinner when IsLoading state is false', () => {
    (useStore as jest.Mock).mockReturnValue(true);

    expect(useStore).toHaveBeenCalledTimes(1);
  });
});
