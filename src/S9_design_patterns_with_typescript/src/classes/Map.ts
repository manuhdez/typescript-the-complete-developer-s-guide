import { Coordinates } from '../types/index';

interface Mappable {
  location: Coordinates;
  name: string;
}

class Map {
  private googleMap: google.maps.Map;

  constructor(wrapper: HTMLElement | null, center: Coordinates) {
    this.googleMap = new google.maps.Map(wrapper, {
      zoom: 3,
      center: center,
      gestureHandling: 'cooperative'
    });
  }

  public addMarker = (mappable: Mappable, content: string): void => {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
      label: mappable.name
    });

    marker.addListener('click', () => {
      const info = new google.maps.InfoWindow({ content });
      info.open(this.googleMap, marker);
    });
  };
}

export default Map;
