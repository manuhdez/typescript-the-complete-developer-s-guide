import UserEdit from './views/UserEdit';
import User from './models/User';

const appRoot = document.getElementById('root');
const user = User.buildUser({ id: 3 });
user.fetch();

setTimeout(() => {
  if (appRoot) {
    const userEdit = new UserEdit(appRoot, user);
    userEdit.render();
  }
}, 2000);
