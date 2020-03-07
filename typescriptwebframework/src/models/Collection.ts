import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  fetch(): void {
    axios
      .get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });
      })
      .catch(() => {
        this.trigger('error');
      })
      .finally(() => {
        this.trigger('change');
      });
  }
}
