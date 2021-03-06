import User from './classes/User';
import Company from './classes/Company';
import Map from './classes/Map';

const testUser = new User();
const testCompany = new Company();

const mapContainer = document.getElementById('map-root');
const customMap = new Map(mapContainer, testUser.location);

customMap.addMarker(testUser);
customMap.addMarker(testCompany);
