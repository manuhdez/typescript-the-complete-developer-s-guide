import fs from 'fs';

/**
 * CSVReader class solution with inheritance-based approach
 */
abstract class CSVReader<T> {
  private filename: string;
  private data: T[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  abstract parseRow(row: string[]): T;

  getData = () => this.data;

  set updateFilename(newFilename: string) {
    this.filename = newFilename;
  }

  read = (): void => {
    const { filename } = this;

    this.data = fs
      .readFileSync(filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.parseRow);
  };
}

export default CSVReader;

/**
 * CSVReader alternative to work on an interface-based solution
 * to extracting the data from the csv file into the MatchReader class
 */
export class CSVFileReader {
  protected filename: string;
  public data: string[][] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  read = (): void => {
    const { filename } = this;

    this.data = fs
      .readFileSync(filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  };
}
