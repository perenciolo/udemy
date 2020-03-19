import { createStore } from 'effector';
import { getDogs } from '../Dogs';

export const IsLoading = createStore(false);
IsLoading.on(getDogs, () => true)
  .on(getDogs.done, () => false)
  .on(getDogs.fail, () => false);
