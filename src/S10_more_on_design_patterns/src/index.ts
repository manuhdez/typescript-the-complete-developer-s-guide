class Sorter {
  public collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {}

  printCollection(): void {
    console.log(`Sorted collection: ${this.collection}`);
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
sorter.printCollection();
