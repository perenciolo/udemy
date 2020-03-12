import { fetchData } from './Fetch';

describe('Utils Fetch File', () => {
  test('should be able to fetch a dog breeds list from remote API.', async () => {
    const response = await fetchData('https://dog.ceo/api/breeds/list/all');
    expect(response).toHaveProperty('status');
  });
});
