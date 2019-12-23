import axios, { AxiosResponse } from 'axios';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export default class User {
  private data: UserProps;
  public events: { [key: string]: Callback[] } = {};
  private usersUrl = 'http://localhost:3000/users';

  constructor(data: UserProps) {
    this.data = data;

    const createHandlers = this.events['create'] || [];
    const createCallback = () => {
      console.log('new user successfully created');
    };
    createHandlers.push(createCallback);
    this.events['create'] = createHandlers;

    this.trigger('create');
  }

  static async getUsers() {
    const response: AxiosResponse<UserProps[]> = await axios.get(
      'http://localhost:3000/users'
    );

    return response;
  }

  public get = (propName: keyof UserProps): string | number | undefined => {
    return this.data[propName];
  };

  public set = (newData: UserProps): void => {
    this.data = {
      ...this.data,
      ...newData
    };
    this.trigger('change');
  };

  public on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  /**
   * Executes all callbacks inside the Callback[] of the passed event
   * @param eventName The name of the event to trigger
   */
  private trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (handlers && handlers.length) {
      handlers.forEach((handler) => handler());
    }
  }

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
