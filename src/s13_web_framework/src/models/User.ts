import axios, { AxiosResponse } from 'axios';
import Eventing from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export default class User {
  private data: UserProps;
  private usersUrl: string;
  private events: Eventing = new Eventing();

  constructor(data: UserProps) {
    this.data = data;
    this.usersUrl = 'http://localhost:3000/users';
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

  /**
   * Fetch the current user data by its id and updates the user info
   */
  public fetch(): void {
    axios
      .get(`${this.usersUrl}/${this.get('id')}`)
      .then((response: AxiosResponse<UserProps>): void => {
        this.set(response.data);
        console.log('user fetched: ', response.data);
      });
  }

  /**
   * Saves the data of a user into the server
   */
  public save(): void {
    const userId = this.get('id');

    if (userId) {
      axios.put(`${this.usersUrl}/${userId}`, this.data);
    } else {
      axios.post(this.usersUrl, this.data);
    }
  }
}
