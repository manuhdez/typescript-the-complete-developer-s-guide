import fs from 'fs';

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
