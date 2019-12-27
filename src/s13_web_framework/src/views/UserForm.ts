import User from '../models/User';

type EventsMap = {
  [key: string]: (event: Event) => void;
};

export default class UserForm {
  constructor(public parent: HTMLElement, private model: User) {
    this.bindModelEvents();
  }

  bindModelEvents(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

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

  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventsMap();

    for (const eventKey in events) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, events[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.getTemplate();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
