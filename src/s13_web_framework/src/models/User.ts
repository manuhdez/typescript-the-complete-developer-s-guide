import Axios, { AxiosPromise, AxiosResponse } from 'axios';

// classes
import Model from '../classes/Model';
import Collection from '../classes/Collection';
import ApiSync from './ApiSync';
import Eventing from './Eventing';
import Attributes from './Attributes';

/**
 * Defines the structured data a user can have
 */
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const userBaseUrl = 'http://localhost:3000/users';

export default class User extends Model<UserProps> {
  static buildUser(userData: UserProps): User {
    return new User(
      new Attributes<UserProps>(userData),
      new Eventing(),
      new ApiSync<UserProps>(userBaseUrl)
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(userBaseUrl, User.buildUser);
  }

  static getAllUsers(): AxiosPromise<UserProps[]> {
    return Axios.get(userBaseUrl);
  }

  static removeUserById(id: number): void {
    const userUrl = `${userBaseUrl}/${id}`;

    Axios.get(userUrl)
      .then((response: AxiosResponse<UserProps>): void => {
        Axios.delete(userUrl)
          .then((response: AxiosResponse): void => {
            console.log('User succesfuly removed.');
          })
          .catch(() => {
            console.log('Error removing user');
          });
      })
      .catch(() => {
        console.log('Cannot remove user. User not found');
      });
  }

  public setRandomAge(): void {
    const age = Math.round(Math.random() * 100);

    this.set({ age });
  }
}
