type Callback = () => void;

export default class Eventing {
  private events: { [key: string]: Callback[] } = {};

  /**
   * Adds a new callback into the given event
   */
  public on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  /**
   * Executes all callbacks inside the Callback[] of the passed event
   * @param eventName The name of the event to trigger
   */
  public trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (handlers && handlers.length) {
      handlers.forEach((handler) => handler());
    }
  }
}
