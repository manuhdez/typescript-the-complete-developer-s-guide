import User from './models/User';
import UsersList from './views/UsersList';

const appRoot = document.getElementById('root');

if (appRoot) {
  const usersCollection = User.buildCollection();
  usersCollection.fetch();

  setTimeout(() => {
    const listOfUsers = new UsersList(appRoot, usersCollection);
    listOfUsers.render();
  }, 2000);
}
