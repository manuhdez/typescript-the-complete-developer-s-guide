import User, { UserProps } from '../models/User';
import View from '../classes/View';

export default class UserInfo extends View<User, UserProps> {
  getTemplate(): string {
    return `
      <div>
        <h1>User Info</h1>
        <p>Name: <strong>${this.model.get('name')}</strong></p>
        <p>Age: <strong>${this.model.get('age')}</strong></p>
      </div>
    `;
  }
}
