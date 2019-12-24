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
  private data: Attributes<UserProps>;
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync('http://localhost:3000/users');

  constructor(data: UserProps) {
    this.data = new Attributes(data);
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
}
