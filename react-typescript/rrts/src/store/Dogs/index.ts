import { createDomain } from 'effector';

import { DogListSchema, DogInfo } from '../../components/DogWrapper';
import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';
import _ from 'lodash';

class DogsApi {
  public static getDogs = async (): Promise<DogInfo[]> => {
    try {
      const response: DogListSchema = await fetchData<DogListSchema>(
        `${API_URI}/breeds/list/all`
      );

      if (!response || !Object.keys(response).includes('message')) {
        throw new Error();
      }

      const breedKeys = Object.keys(response.message);
      const breedImgs = breedKeys.map(
        async (breedName: string) => await DogsApi.fetchDogImg(breedName)
      );
      const resolvedBreedImgs = await Promise.all(breedImgs);
      const breedNames = _.map(breedKeys, _.capitalize);

      return Promise.resolve(
        breedNames.map((dogName: string, index: number) => ({
          name: dogName,
          uri: resolvedBreedImgs[index],
          scold: 0
        }))
      );
    } catch (error) {
      console.log(error);
      return Promise.reject([]);
    }
  };

  private static fetchDogImg = async (breedName: string): Promise<string> => {
    try {
      const response = await fetchData<{ [key: string]: string }>(
        `${API_URI}/breed/${breedName.toLowerCase()}/images/random`
      );

      if (!response || !Object.keys(response).includes('message')) {
        throw new Error();
      }

      return response.message;
    } catch (error) {
      console.log(error);
      return '';
    }
  };
}

export const DogsDomain = createDomain();

export const getDogs = DogsDomain.effect('get dogs', {
  handler: DogsApi.getDogs
});

export const changeDog = DogsDomain.event<DogInfo>();

export const Dogs = DogsDomain.store<DogInfo[]>([]) // <-- Default state
  // getUser.done is the event that fires whenever a promise returned by the effect is resolved
  .on(getDogs.done, (state, { result }) => [...state, ...result])
  .on(changeDog, (state: DogInfo[], payload: DogInfo) =>
    state.map(element => {
      if (element.name === payload.name) {
        return payload;
      }

      return element;
    })
  );
