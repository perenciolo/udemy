import axios, { AxiosResponse } from 'axios';
/**
 * @method fetchData<T>
 * @param url - url string to fetch for.
 * @returns - Promise<T>
 */
export async function fetchData<T = {}>(url: string): Promise<T> {
  try {
    // const res = await fetch(url); //change to axios
    // const data: T = await res.json();
    const data: T = await (await axios.get(url)).data;
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
