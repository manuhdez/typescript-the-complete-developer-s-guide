export default class Attributes<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  /**
   * Returns the value of the passed key stored in the User instance
   */
  public get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  /**
   * Updates the User data with the given values
   */
  public set = (newData: T): void => {
    this.data = {
      ...this.data,
      ...newData
    };

    // this.events.trigger('change');
  };
}
