import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

export default class Sync<T> {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  /**
   * Fetch the current resource data by its id and updates the user info
   */
  public fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  /**
   * Saves the data of a resource into the server
   */
  public save(data: UserProps): AxiosPromise<T> {
    const { id } = data;

    if (id) {
      return axios.put(`${this.baseUrl}/${id}`, data);
    } else {
      return axios.post(this.baseUrl, data);
    }
  }
}
