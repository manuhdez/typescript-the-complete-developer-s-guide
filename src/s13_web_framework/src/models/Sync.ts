import axios, { AxiosPromise } from 'axios';

interface HasID {
  id?: number;
}

export default class Sync<T extends HasID> {
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
  public save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.baseUrl}/${id}`, data);
    } else {
      return axios.post(this.baseUrl, data);
    }
  }
}
