import User from './models/User';

const user = new User({ name: 'Manu', age: 28 });
let userName;
user.set('name', 'Rafa');
userName = user.get('name');

const body = document.querySelector('body');
const appContainer = document.createElement('div');
const header = document.createElement('h1');
header.innerHTML = `Hola ${userName}`;

appContainer.appendChild(header);

if (body) body.appendChild(appContainer);
