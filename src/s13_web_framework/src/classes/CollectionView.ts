import Collection from './Collection';

export default abstract class CollectionView<T, P> {
  constructor(public parent: Element, public collection: Collection<T, P>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    for (const model of this.collection.models) {
      const parentForItem = document.createElement('div');

      this.renderItem(model, parentForItem);
      templateElement.content.append(parentForItem);
    }

    this.parent.append(templateElement.content);
  }
}
