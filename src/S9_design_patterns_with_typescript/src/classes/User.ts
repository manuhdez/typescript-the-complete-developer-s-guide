import faker from 'faker';
import { Coordinates } from '../types/index';

class User {
  public name: string;
  public location: Coordinates;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}

export default User;
