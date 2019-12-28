import Model from './Model';

export type EventsMap = {
  [key: string]: (event: Event) => void;
};

export default abstract class View<T extends Model<K>, K> {
  constructor(public parent: HTMLElement, protected model: T) {
    this.bindModelEvents();
  }

  /**
   * Returns an object that maps events with its corresponding callback function
   */
  abstract eventsMap(): EventsMap;

  /**
   * Returns the html string template to render inside the DOM
   */
  abstract getTemplate(): string;

  /**
   * Adds default events to the model
   */
  bindModelEvents(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  /**
   * Binds the eventsMap object inside the html template elements
   * @param fragment The <template> tag that will be inserted to the DOM
   */
  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventsMap();

    for (const eventKey in events) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, events[eventKey]);
      });
    }
  }

  /**
   * Renders the <template> elemtent into the DOM
   */
  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.getTemplate();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
