import axios, { AxiosResponse } from 'axios';

// classes
import Eventing from './Eventing';
import Sync from './Sync';
import Attributes from './Attributes';

/**
 * Defines the structured data a user can have
 */
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export default class User {
  private attributes: Attributes<UserProps>;
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync('http://localhost:3000/users');

  constructor(data: UserProps) {
    this.attributes = new Attributes(data);
  }
  /**
   * Gets a list of all users stored on the server
   */
  static async getUsers() {
    const response: AxiosResponse<UserProps[]> = await axios.get(
      'http://localhost:3000/users'
    );

    return response;
  }

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

  set(newData: UserProps) {
    this.attributes.set(newData);
    this.events.trigger('change');
  }

  fetch() {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without a valid user id');
    }

    this.sync.fetch(id).then((response: AxiosResponse<UserProps>): void => {
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
