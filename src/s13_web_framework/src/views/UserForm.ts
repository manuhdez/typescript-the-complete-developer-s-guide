import User, { UserProps } from '../models/User';
import View, { EventsMap } from '../classes/View';

export default class UserForm extends View<User, UserProps> {
  eventsMap(): EventsMap {
    return {
      'submit:form': this.onSubmit,
      'click:#age-btn': this.onRandomizeAge,
      'click:#save-btn': this.onSave
    };
  }

  onSubmit = (event: Event): void => {
    event.preventDefault();
    const inputName = this.parent.querySelector('input');

    if (inputName) {
      const name = inputName.value;

      this.model.set({ name });
    }
  };

  onRandomizeAge = (): void => {
    this.model.setRandomAge();
  };

  onSave = (): void => {
    this.model.save();
  };

  getTemplate(): string {
    return `
      <form>
        <input type="text" name="user-name" placeholder="user input" required minlength="4" />
        <button type="submit">Change name</button>
        <button type="button" id="age-btn">Set random age</button>
        <button type="button" id="save-btn">Save changes</button>
      </form>
      <style>
        form {
          display: flex;
          flex-direction: column;
          max-width: 300px;
        }

        form > * {
          font-size: 0.85rem;
        }

        input {
          height: 35px;
          padding: 0 10px;
          margin-bottom: 10px;
          border: 1px solid rgba(0,0,0,0.5);
          border-radius: 3px;
        }

        button {
          height: 35px;
          color: #333;
          background: #C1C1C1;
          border: none;
          border-radius: 3px;
          margin-bottom: 5px;
          cursor: pointer;
        }

        #save-btn {
          color: #fff;
          background: #5BCCA2;
        }
      </style>
    `;
  }
}
