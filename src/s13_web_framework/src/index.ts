import User, { UserProps } from './models/User';

const body = document.querySelector('body');
const appContainer = document.createElement('div');

const testUser = User.buildUser({ id: 1 });

testUser.on('change', () => {
  console.log(`user updated.`);
});

testUser.fetch();

setTimeout(() => {
  testUser.set({ name: 'Wally' });
  testUser.save();
}, 3000);

setTimeout(() => {
  printUSerList();
}, 6000);

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
