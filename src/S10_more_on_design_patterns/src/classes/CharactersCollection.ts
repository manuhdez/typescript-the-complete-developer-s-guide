import Sorter from './Sorter';

class CharactersCollection extends Sorter {
  public data: string;

  constructor(dataInput: string) {
    super();
    this.data = dataInput;
  }

  get length(): number {
    return this.data.length;
  }

  /**
   * Compares if the left character is greater than the right character
   * Ignores uppercase, just compare the actual letters
   */
  compare = (leftIndex: number, rightIndex: number): boolean => {
    const leftCharacter = this.data[leftIndex].toLowerCase();
    const rightCharacter = this.data[rightIndex].toLowerCase();

    return leftCharacter > rightCharacter;
  };

  /**
   * Swaps the position between two given letter indexes
   */
  swap = (leftIndex: number, rightIndex: number): void => {
    const separatedText = this.data.split('');

    const leftHand = separatedText[leftIndex];
    separatedText[leftIndex] = separatedText[rightIndex];
    separatedText[rightIndex] = leftHand;

    this.data = separatedText.join('');
  };

  print = () => {
    console.log(`Sorted characters collection: ${this.data}`);
  };
}

export default CharactersCollection;
