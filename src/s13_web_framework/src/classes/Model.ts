import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getData(): T;
  set(newData: T): void;
}

interface ModelSync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise;
}

interface ModelEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasID {
  id?: number;
}

/**
 * Model class to be extended from
 */
export default class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: ModelEvents,
    private sync: ModelSync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    this.events.trigger('read');
    return this.attributes.get;
  }

  set(newData: T) {
    this.attributes.set(newData);
    this.events.trigger('change');
  }

  fetch() {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without a valid user id');
    }

    this.sync.fetch(id).then((response: AxiosResponse<T>): void => {
      this.set(response.data);
    });
  }

  save() {
    this.sync
      .save(this.attributes.getData())
      .then((): void => {
        this.trigger('save');
      })
      .catch((): void => {
        this.trigger('error');
      });
  }
}
