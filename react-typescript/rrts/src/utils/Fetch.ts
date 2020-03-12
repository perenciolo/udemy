/**
 * @method fetchData<T>
 * @param url - url string to fetch for.
 * @returns - Promise<T>
 */
export async function fetchData<T = {}>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    const data: T = await res.json();
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
