import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: T): T[K];
  getData(): T;
  set(newData: T): void;
}

interface ModelSync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise;
}

interface ModelEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

/**
 * Model class to be extended from
 */
export default class Model {}
