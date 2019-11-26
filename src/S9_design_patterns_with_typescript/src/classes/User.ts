import faker from 'faker';
import { Coordinates } from '../types/index';
import { Mappable } from './Map';

class User implements Mappable {
  public name: string;
  public location: Coordinates;
  public color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = 'blue';
  }

  markerContent = (): string => `User name: ${this.name}`;
}

export default User;
