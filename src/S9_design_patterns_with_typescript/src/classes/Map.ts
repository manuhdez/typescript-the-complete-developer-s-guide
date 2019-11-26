import { Coordinates } from '../types/index';

class Map {
  private googleMap: google.maps.Map;

  constructor(wrapper: HTMLElement | null, center: Coordinates) {
    this.googleMap = new google.maps.Map(wrapper, {
      zoom: 5,
      center: center
    });
  }
}

export default Map;
