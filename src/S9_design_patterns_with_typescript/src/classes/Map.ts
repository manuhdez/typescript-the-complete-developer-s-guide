import { Coordinates } from '../types/index';

interface Mappable {
  location: Coordinates;
}

class Map {
  private googleMap: google.maps.Map;

  constructor(wrapper: HTMLElement | null, center: Coordinates) {
    this.googleMap = new google.maps.Map(wrapper, {
      zoom: 5,
      center: center
    });
  }

  public addMarker = (mappable: Mappable): void => {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location
    });
  };
}

export default Map;
