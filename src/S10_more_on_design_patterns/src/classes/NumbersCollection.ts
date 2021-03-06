import Sorter from './Sorter';

class NumbersCollection extends Sorter {
  public data: number[];

  constructor(dataInput: number[]) {
    super();
    this.data = dataInput;
  }

  get length(): number {
    return this.data.length;
  }

  compare = (leftIndex: number, rightIndex: number): boolean => {
    return this.data[leftIndex] > this.data[rightIndex];
  };

  swap = (leftIndex: number, rightIndex: number): void => {
    const leftHand = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  };

  print = () => {
    console.log(`Sorted number collection: ${this.data}`);
  };
}

export default NumbersCollection;
