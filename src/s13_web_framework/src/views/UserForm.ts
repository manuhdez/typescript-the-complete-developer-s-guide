import User from '../models/User';

type EventsMap = {
  [key: string]: () => void;
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
      'click:#submit-btn': this.onSubmit,
      'click:#age-btn': this.onRandomizeAge
    };
  }

  onSubmit = (): void => {
    console.log('submit form!');
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
        <input type="text" placeholder="user input" />
        <button id="submit-btn">Click me</button>
        <button id="age-btn">Set random age</button>
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
