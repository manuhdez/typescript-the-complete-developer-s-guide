import User, { UserProps } from '../models/User';
import View from '../classes/View';

export default class UserInfo extends View<User, UserProps> {
  getTemplate(): string {
    return `
      <div>
        <h1>User Info</h1>
        <h3>Name: ${this.model.get('name')}</h3>
        <h3>Age: ${this.model.get('age')}</h3>
      </div>
    `;
  }
}
