import axios, { AxiosResponse } from 'axios';
import Eventing from './Eventing';
import Sync from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export default class User {
  private data: UserProps;
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync('http://localhost:3000/users');

  constructor(data: UserProps) {
    this.data = data;
    this.events.trigger('create');
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

  /**
   * Returns the value of the passed key stored in the User instance
   */
  public get = (propName: keyof UserProps): string | number | undefined => {
    return this.data[propName];
  };

  /**
   * Updates the User data with the given values
   */
  public set = (newData: UserProps): void => {
    this.data = {
      ...this.data,
      ...newData
    };

    this.events.trigger('change');
  };
}
