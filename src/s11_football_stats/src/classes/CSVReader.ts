import fs from 'fs';

class CSVReader {
  private filename: string;
  private data: string[][] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  getData = (): string[][] => this.data;

  set updateFilename(newFilename: string) {
    this.filename = newFilename;
  }

  read = (): void => {
    const { filename } = this;

    this.data = fs
      .readFileSync(filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  };
}

export default CSVReader;
