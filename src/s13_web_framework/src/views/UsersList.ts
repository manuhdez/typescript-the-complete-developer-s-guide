import User, { UserProps } from '../models/User';
import UserInfo from './UserInfo';
import CollectionView from '../classes/CollectionView';

export default class UsersList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserInfo(itemParent, model).render();
  }
}
