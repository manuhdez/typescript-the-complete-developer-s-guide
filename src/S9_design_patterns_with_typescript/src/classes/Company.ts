import faker from 'faker';
import { Coordinates } from '../types/index';

class Company {
  public name: string;
  public catchPhrase: string;
  public location: Coordinates;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}

export default Company;
