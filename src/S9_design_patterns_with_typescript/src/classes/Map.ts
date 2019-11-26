import { Coordinates } from '../types/index';

interface Mappable {
  name: string;
  markerContent(): string;
  location: Coordinates;
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

  public addMarker = (mappable: Mappable): void => {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location
    });

    marker.addListener('click', () => {
      const info = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      info.open(this.googleMap, marker);
    });
  };
}

export default Map;
