import User, { UserProps } from './models/User';

const body = document.querySelector('body');
const appContainer = document.createElement('div');

const usersCollection = User.buildCollection();

usersCollection.fetch();

setTimeout(() => {
  // printUSerList();
  console.log(usersCollection.models);
}, 3000);

/**
 * Render the user list on screen
 */
function printUSerList(): void {
  User.getAllUsers().then((res) => {
    const usersListElement = document.createElement('ul');

    res.data.forEach((user: UserProps) => {
      const { name, age } = user;
      const userItem = document.createElement('li');
      userItem.innerHTML = `${name} tiene ${age} años`;

      usersListElement.appendChild(userItem);
    });

    appContainer.appendChild(usersListElement);
    if (body) body.appendChild(appContainer);
  });
}
