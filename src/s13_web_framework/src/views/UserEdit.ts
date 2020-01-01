import View, { RegionsMap } from '../classes/View';
import User, { UserProps } from '../models/User';

// views
import UserForm from './UserForm';
import UserInfo from './UserInfo';

export default class UserEdit extends View<User, UserProps> {
  regionsMap(): RegionsMap {
    return {
      userInfo: '.user-info',
      userForm: '.user-form'
    };
  }

  preRender(): void {
    new UserInfo(this.regions.userInfo, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  getTemplate(): string {
    return `
      <div>
        <div class="user-info"></div>
        <div class="user-form"></div>
      </div>
      <style>
        html, * {
          font-family: sans-serif;
        }
      </style>
    `;
  }
}
