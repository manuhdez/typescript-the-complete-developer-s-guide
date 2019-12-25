import Axios, { AxiosResponse } from 'axios';
import Eventing from '../models/Eventing';
import User from '../models/User';

/**
 *
 */
export default class Collection<T, P> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string, public deserialize: (json: P) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    Axios.get(this.rootUrl)
      .then((response: AxiosResponse<P[]>): void => {
        response.data.forEach((item: P) => {
          const model = this.deserialize(item);
          this.models.push(model);
        });
      })
      .catch(() => {
        console.log('Error fething collection');
      });
  }
}
