class NumbersCollection {
  public data: number[];

  constructor(dataInput: number[]) {
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
    console.log(`Sorted collection: ${this.data}`);
  };
}

export default NumbersCollection;
