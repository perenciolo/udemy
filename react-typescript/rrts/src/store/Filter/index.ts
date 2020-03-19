import { createStore, createEvent } from 'effector';

import { DogInfo } from '../../components/DogWrapper';
import { getDogs, Dogs, changeDog } from '../Dogs';

const INITIAL_STATE: DogInfo[] = [];

export const activateFilter = createEvent<string>('Filter dog data by value');
export const dogChanged = createEvent<DogInfo>('Change state given a payload');

changeDog.watch((payload: DogInfo) => {
  dogChanged(payload);
});

export const Filter = createStore<DogInfo[]>(INITIAL_STATE)
  .on(getDogs.done, (_, { result }) => result)
  .on(getDogs.fail, () => INITIAL_STATE)
  .on(activateFilter, (_, payload: string) => {
    switch (payload) {
      case 'all':
        return Dogs.getState();
      default:
        return Dogs.getState().filter(dogs =>
          dogs.name.toLowerCase().startsWith(payload)
        );
    }
  })
  .on(dogChanged, (state: DogInfo[], payload: DogInfo) =>
    state.map(dog => {
      if (dog.name === payload.name) {
        return payload;
      }
      return dog;
    })
  );
