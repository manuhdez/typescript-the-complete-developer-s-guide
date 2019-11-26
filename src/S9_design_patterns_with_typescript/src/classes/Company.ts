import faker from 'faker';
import { Coordinates } from '../types/index';
import { Mappable } from './Map';

class Company implements Mappable {
  public name: string;
  public catchPhrase: string;
  public location: Coordinates;
  public color: string;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = 'green';
  }

  markerContent = (): string => `
    <h3>${this.name}</h3>
    <p>${this.catchPhrase}</p>
  `;
}

export default Company;
