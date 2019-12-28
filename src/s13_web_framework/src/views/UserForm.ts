import User, { UserProps } from '../models/User';
import View, { EventsMap } from '../classes/View';

export default class UserForm extends View<User, UserProps> {
  eventsMap(): EventsMap {
    return {
      'submit:form': this.onSubmit,
      'click:#age-btn': this.onRandomizeAge
    };
  }

  onSubmit = (event: Event): void => {
    event.preventDefault();
    const inputName = this.parent.querySelector('input');

    if (inputName) {
      const name = inputName.value;

      this.model.set({ name });
      this.model.save();
    }
  };

  onRandomizeAge = (): void => {
    this.model.setRandomAge();
  };

  getTemplate(): string {
    return `
      <div>
        <h1>User form</h1>
        <div>
          <p>${this.model.get('name')}</p>
          <p>${this.model.get('age')}</p>
        </div>
        <form>
          <input type="text" name="user-name" placeholder="user input" required minlength="4" />
          <button type="submit">Click me</button>
          <button type="button" id="age-btn">Set random age</button>
        </form>
      </div>
    `;
  }
}
