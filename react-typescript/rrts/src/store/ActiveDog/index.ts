import { createStore, createEvent } from 'effector';
import { DogInfo } from '../../components/DogWrapper';
import { getDogs } from '../Dogs';

const INITIAL_STATE: DogInfo = {
  name: '',
  uri: ''
};

export const selectActiveDog = createEvent<DogInfo>(
  'Select a dog and make it active'
);

export const scoldActiveDog = createEvent<DogInfo>('Scold current dog');

export const ActiveDog = createStore<DogInfo>(INITIAL_STATE)
  .on(getDogs.done, (_, { result }) => result[0])
  .on(getDogs.fail, () => INITIAL_STATE)
  .on(scoldActiveDog, (_, payload: DogInfo) => payload)
  .on(selectActiveDog, (_, payload: DogInfo) => payload);
