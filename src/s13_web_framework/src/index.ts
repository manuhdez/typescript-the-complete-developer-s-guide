import UserForm from './views/UserForm';
import User from './models/User';

const appRoot = document.getElementById('root');
const user = User.buildUser({ id: 3 });
user.fetch();

setTimeout(() => {
  if (appRoot) {
    const userForm = new UserForm(appRoot, user);
    userForm.render();
  }
}, 2000);
