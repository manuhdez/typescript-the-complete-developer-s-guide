import Model from './Model';

export type EventsMap = {
  [key: string]: (event: Event) => void;
};

export type RegionsMap = {
  [key: string]: string;
};

export default abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, protected model: T) {
    this.bindModelEvents();
  }

  /**
   * Returns the html string template to render inside the DOM
   */
  abstract getTemplate(): string;

  /**
   * Returns an object that maps events with its corresponding callback function
   */
  eventsMap(): EventsMap {
    return {};
  }

  /**
   * Returns an object that maps a ViewClass with a DOM selector to render its content
   */
  regionsMap(): RegionsMap {
    return {};
  }

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

  mapRegions(fragment: DocumentFragment): void {
    const regionsList = this.regionsMap();

    for (const key in regionsList) {
      const selector = regionsList[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  preRender(): void {}

  /**
   * Renders the <template> elemtent into the DOM
   */
  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.getTemplate();

    // bind events and regions with its elements
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.preRender();
    this.parent.append(templateElement.content);
  }
}
